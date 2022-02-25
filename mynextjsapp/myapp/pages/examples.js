import Head from "next/head";
import Uniform from "../components/uniformComponents"
import Image from "next/image"
import styles from "../styles/topnavs.module.css"

export default function Example(){
    console.log("yay")
    let imgs = ["/../public/messages.png", "/../public/classes.png", "/../public/login.png"]
    
    return(
    <Uniform>
        <Head>
            <title>Példák</title>
        </Head>
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1>Eddigi munkáim</h1>
            </div>
            <div className={styles.exampleContainer}>
                <div className={styles.example}>
                    <div className={styles.exampleTitle}>Üzenetküldő felület</div>
                    <Image src="/../public/messages.png" width="500vmin" height="250vmin" alt="messages">

                    </Image>
                    <p>Tökéletesen működő üzenetküldő webapplikáció. Az <b>Üzimüzi</b> kiírja az üzenet küldésének idejét, illetve két üzenetküldés között
                    
                    eltelt idő alapján illeszti be őket. Default módon csak az utolsó 10 üzenetet mutatja, de tudja az összeset is.</p>
                </div>
                <div className={styles.example}>
                <div className={styles.exampleTitle}>Iskolai jegyzetfüzet</div>
                    <Image src="/../public/classes.png" width="500vmin" height="250vmin" alt="classes">

                    </Image>
                    <p>Iskolai jegyzetfüzet ami tantárgyakra bontva menti a jegyzeteket, illetve egy rakás built-in funkcióval rendelkezezik, például az órarend értelmezése
                        és kiírása. Képes mutatni az előző a jelenlegi és a következő órádat.                   </p>
                </div>
                <div className={styles.example}>
                <div className={styles.exampleTitle}>Login és regisztrációs rendszer</div>
                    <Image src="/../public/login.png" width="500vmin" height="250vmin" alt="loginsystem">

                    </Image>
                    <p>
                        Egy teljesen kiépített loginrendszer, ami automatikusan menti és alkalmazza az új regisztrálókat és különböző tulajdonságaik alapján hoz fel nekik oldalakat.
                    </p>
                </div>
                <div className={styles.example}>
                <div className={styles.exampleTitle}>Személyes portfólió</div>
                    <Image src="/../public/login.png" width="500vmin" height="250vmin" alt="loginsystem">

                    </Image>
                    <p>
                        Személyre szabott saját weboldal, gyönyörű design és animációk, SEO, és oldalon belüli speciális funckiók. Vállalom az oldal felhelyezését is, és az
                        azzal járó problémákat, Te csak vedd meg a domain-t, és ennyi.
                    </p>
                </div>
            </div>
        </div>
    </Uniform>
    )
}