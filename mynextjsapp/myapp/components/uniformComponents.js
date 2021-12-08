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
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300&display=swap" rel="stylesheet" />
            </Head>
            <topnav className={styles.topnav}>
                <Link href={"/"}>
                    <a>.főoldal()</a>
                </Link>
                <Link href={"/"}>
                    <a>.példák()</a>
                </Link>
                <Link href={"/"}>
                    <a>.rólam()</a>
                </Link>
                <Link href={"/"}>
                    <a>.kapcsolatok()</a>
                </Link>
                
            </topnav>
            <div>
                {children}
            </div>
            <footer className={styles.footer}>
                <div>
                    <p>Telefonszám: 06306677899</p>
                    <p>Email: palyi.kristof@gmail.com</p>
                </div>
                <div>
                    <p>
                        <Link href={"/Egyéb"}>
                            <a>Email írás</a>
                        </Link>
                    </p>
                    <p>
                        <Link href="https://github.com/palyikris" target="_blank">
                            <a>Github</a>
                        </Link>
                    </p>
                </div>
            </footer>
        </div>
    )
}