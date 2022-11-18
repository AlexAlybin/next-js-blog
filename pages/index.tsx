import Link from "next/link";
import Head from "next/head";
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>The Blog | Home</title>
            </Head>
            <div>
                <h1 className={styles.title}>Home Page</h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut dolor, dolorum eaque et iure laborum
                    magni maxime nihil odio odit officiis, porro rerum similique sunt temporibus tenetur voluptatem
                    voluptatibus.</p>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut dolor, dolorum eaque et iure laborum
                    magni maxime nihil odio odit officiis, porro rerum similique sunt temporibus tenetur voluptatem
                    voluptatibus.</p>
                <Link href="/authors" className={styles.btn}>See all authors</Link>
            </div></>
    )
}
