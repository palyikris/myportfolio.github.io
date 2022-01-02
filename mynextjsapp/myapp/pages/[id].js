import { getAllFeaturesId, getFeaturesData } from "../lib/features"
import Head from "next/head"
import Uniform from "../components/uniformComponents"
import styles from "../styles/feature.module.css"
import Image from "next/image"


export async function getStaticProps({params}){
    const featuresData = await getFeaturesData(params.id)
    return {
        props: {
            featuresData
        }
    }
}
export async function getStaticPaths(){
    const paths = getAllFeaturesId()
    return {
        paths,
        fallback: false
    }
}
export default function Feature({featuresData}){
    console.log(featuresData)
    return (
        <Uniform>
            <Head>
                <title>{featuresData.id}</title>
            </Head>
            <div className={styles.introContainer}>
                <div className={styles.intro}>
                    <h1 class={styles.title}>{featuresData.title}</h1>
                    <div className={styles.introText}><span className={styles.code}>&lt;Bevezetőszöveg&gt;</span><br />{featuresData.introcontent}<br /><span className={styles.code}>&lt;/Bevezetőszöveg&gt;</span></div>
                
                </div>
                <div className={styles.htmlTag}>
                    <pre>{featuresData.logo}</pre>
                </div>
            </div>
            <div className={styles.imageEx}>
                <span className={styles.imgBorder}>
                    <Image src={featuresData.img} width="400vmin" height="200vmin">

                    </Image>
                </span>
                <div className={styles.imageText}>
                    {featuresData.imgdesc}
                </div>
            </div>
        </Uniform>
    )
}