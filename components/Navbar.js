import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <Link href="/">
                        <a className="navbar-item">
                            <Image src='/vercel.svg' width={283} height={64} />
                        </a>
                    </Link>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbar" className="navbar-menu">
                    <div className="navbar-end">
                        <Link href="/">
                            <a className="navbar-item">Home</a>
                        </Link>
                        <Link href="/recipes">
                            <a className="navbar-item">Recipes</a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar