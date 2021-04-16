import Image from 'next/image'
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'recipe'
    })
    const paths = res.items.map(item => {
        return {
            params: {
                slug: item.fields.slug
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({
    params
}) => {
    const { items } = await client.getEntries({
        content_type: 'recipe',
        'fields.slug': params.slug
    })
    return {
        props: {
            recipe: items[0],
        },
        revalidate: 1
    }
}

const Recipe = ({
    recipe
}) => {
    const { title, featuredImage, cookingTime, ingredients, methods } = recipe.fields

    return (
        <section className="section">
            <div className="content">
                <figure className="image">
                    <Image
                        src={'https:' + featuredImage.fields.file.url}
                        width={featuredImage.fields.file.details.image.width}
                        height={featuredImage.fields.file.details.image.height}
                    />
                </figure>

                <h1 className="title">
                    {title}
                </h1>
                <p>
                    Take approximate {cookingTime} min to make
                </p>

                <h3 className="subtitle">
                    Ingredients:
                </h3>
                <ul className="ingredients">
                    {ingredients.map(ingredient =>
                        <li>{ingredient}</li>
                    )}
                </ul>

                <h3 className="subtitle">
                    Methods:
                </h3>
                <div>{documentToReactComponents(methods)}</div>
            </div>
        </section>
    )
}

export default Recipe