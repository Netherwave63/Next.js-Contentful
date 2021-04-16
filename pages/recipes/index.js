import Link from 'next/link'
import Image from 'next/image'
import { createClient } from 'contentful'

export const getStaticProps = async () => {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })

    const res = await client.getEntries({
        content_type: 'recipe'
    })

    return {
        props: {
            recipes: res.items,
        },
        revalidate: 1
    }
}

const Recipes = ({
    recipes
}) => {
    return (
        < section className="section" >
            <h1 className="title">Recipes</h1>
            <ul className="is-flex is-justify-content-space-between is-flex-wrap-wrap">
                {
                    recipes.map(recipe =>
                        <RecipeCard key={recipe.sys.id} recipe={recipe} />
                    )
                }
            </ul>
        </section >
    )
}

const RecipeCard = ({
    recipe
}) => {
    const { title, slug, cookingTime, thumbnail } = recipe.fields

    return (
        <li className="card mb-6" style={{ minWidth: "30%" }}>
            <div className="card-image">
                <Image
                    src={'https:' + thumbnail.fields.file.url}
                    width="400"
                    height="300"
                />
            </div>
            <div className="card-content">
                <div className="content">
                    <p className="title is-4">
                        {title}
                    </p>
                    <p className="subtitle is-6">
                        Take approximate {cookingTime} min to make
                    </p>
                    <Link href={'/recipes/' + slug}>
                        <a>Cook this</a>
                    </Link>
                </div>
            </div>
        </li>
    )
}

export default Recipes