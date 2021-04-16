import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const PageNotFound = () => {
	const router = useRouter()

	useEffect(() => {
		setTimeout(() => {
			router.push('/')
		}, 3000)
	})

	return (
		<section className="section has-text-centered">
			<h5 className="is-size-1">Ooooops..</h5>
			<h6 className="is-size-3 mb-4">That page cannot be found</h6>
			<p>Go back to the <Link href="/">Homepage</Link></p>
		</section>
	)
}

export default PageNotFound