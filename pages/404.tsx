import Link from "next/link";

const NotFound = (props: any) => {
    return (
        <div className={"not-found"}>
            <h1>Oooops...</h1>
            <h2>The page doesn't exist</h2>
            <p>You can return to <Link href={"/"} legacyBehavior>
                <a>Home Page</a></Link></p>
        </div>
    )
}

export default NotFound;