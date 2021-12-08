import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Uniform from "../components/uniformComponents"
import { getSortedFeaturesData } from '../lib/features'

export async function getStaticProps(){
  const allFeaturesData = getSortedFeaturesData()
  return{
    props:{
      allFeaturesData
    }
  }
}

export default function Home(allFeaturesData) {
  return (
    <Uniform>
      <Head>
        <title>Kristóf</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.introduction}>
          <div className={styles.introText}>
            <h1>Helló, én Kristóf vagyok!</h1>
            <h4 className={styles.introductoryText}>Szeretnél magadnak egy szuper weboldalt?<br></br>
              Egy olyat, ami interaktív, szép, és tud egy rakás<br></br> funkciót, amit csak szeretnél tényleg.<br></br><br></br>
              Ha igen, akkor remek helyre jöttél. <span className={styles.greetingSpan}>Üdvözöllek!</span>
            </h4>
          </div>
          <div className={styles.clippy}>
            <div className={styles.clippedDiv}>
              <div className={styles.clippedDivInterior}></div>
            </div>
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.featuresContainer}>
        <h1 className={styles.featuresH1}>Válaszd ki mit szeretnél!</h1>
          <div className={styles.featuresList}>
              {allFeaturesData.allFeaturesData.map(({id, title, description}) => (
                <div className={styles.featureContainer}>
                  <div className={styles.feature}>
                  <div className={styles.featureTitle}>{id}</div>
                  <div className={styles.featureDesc}><p>{description}</p></div>
                  <Link href={`/${id}`}>
                    <a className={styles.linkToFeature}>.megnézem(ezt)</a>
                  </Link>
                </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Uniform>
    
  )
}
