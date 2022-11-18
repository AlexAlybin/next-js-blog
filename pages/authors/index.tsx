import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Blog.module.css"


export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    return {
        props: {
            authors: data
        }
    }
}

// @ts-ignore
const Authors = ({authors}) => {
    return (
        <>
            <Head>
                <title>The Blog | All users</title>
            </Head>
            <div>
                <h1>All Authors</h1>
                    {authors.map((author: any) => {
                        return (
                            <div key={author.id}>
                                <Link href={`/authors/${author.id}`} legacyBehavior>
                                    <a className={styles.single}>
                                        <h3>{author.name}</h3>
                                    </a>
                                </Link>
                            </div>)
                    })}
            </div>
        </>
    );
};

export default Authors;