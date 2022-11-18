import Link from "next/link"
import Image from "next/image"
import Logo from "../public/blog_pic.png"

const Navbar = () => {
    return (
        <nav>
            <div className="logo"><Link href="/" legacyBehavior><a>
                <Image src={Logo} alt={"site logo"} width={160}/></a></Link></div>
            <Link href="/authors" legacyBehavior><a>Authors</a></Link>
            <Link href="/about" legacyBehavior><a>About Us</a></Link>
        </nav>
    )
}

export default Navbar;