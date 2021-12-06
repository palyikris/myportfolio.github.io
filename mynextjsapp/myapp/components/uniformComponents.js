import Head from "next/head";
import Link from "next/Link"
import styles from "../styles/layout.styles.module.css"

export default function myHead({children}){
    return (
        <div>
            <Head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Kristóf</title>
            </Head>
            <topnav className={styles.topnav}>
                <Link href={"/"}>
                    <a>anyad</a>
                </Link>
                <Link href={"/"}>
                    <a>a tied</a>
                </Link>
                <Link href={"/"}>
                    <a>sztem is</a>
                </Link>
                <Link href={"/"}>
                    <a>kussolj</a>
                </Link>
                <Link href={"/"}>
                    <a>szopat</a>
                </Link>
            </topnav>
            <div>
                {children}
            </div>
            <footer className={styles.footer}>
                <p>orbanviktoralavju</p>
            </footer>
        </div>
    )
}