import Head from "next/head";
import Link from "next/Link"
import styles from "../styles/layout.styles.module.css"

export default function myHead({children}){
    return (
        <div>
            <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> 
            <meta charset="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Kristóf</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300&display=swap" rel="stylesheet" />
            <link rel="icon" href="/../public/icon.ico" />
            </Head>
            <topnav className={styles.topnav}>
                <Link href={"/"}>
                    <a>.főoldal()</a>
                </Link>
                <Link href={"/examples"}>
                    <a>.példák()</a>
                </Link>
                <Link href={"/aboutme"}>
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