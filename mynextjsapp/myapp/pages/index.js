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
  /*const testList = [
    {
      "szabika" : "alavju"
    }
  ]*/
  return (
    <Uniform>
      <Head>
        <title>Kristóf</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.introduction}>
          <div>
            <h1>Helló, én Kristóf vagyok!</h1>
            <h4>Szeretnél magadnak egy szuper weboldalt?<br></br>
              Egy olyat, ami interaktív, szép, és tud egy rakás<br></br> funkciót, amit csak szeretnél tényleg.<br></br><br></br>
              Ha igen, akkor remek helyre jöttél. <span>Üdvözöllek!</span>
            </h4>
          </div>
        </div>
        <div className={styles.featuresContainer}>
        <h1 className={styles.featuresH1}>Válaszd ki mit szeretnél!</h1>
          <div className={styles.featuresList}>
          <section className={`${styles.heading} ${styles.padding1px}`}>
            <ul className={styles.list}>
              
              {allFeaturesData.allFeaturesData.map(({id, title}) => (
                <div className={styles.featureTitle}>{title}</div>
              ))}
            </ul>
      </section>
          </div>
        </div>
      </div>
    </Uniform>
    
  )
}
