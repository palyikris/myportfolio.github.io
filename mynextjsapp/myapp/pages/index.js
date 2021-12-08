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
  function rollOut(){
    const servicesAll = document.querySelectorAll(".service");
    console.log(servicesAll)
  }
  
  return (
    <Uniform>
      
      <Head>
        <title>Kristóf</title>
      </Head>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script>AOS.init();</script>
      <div className={styles.container} data-aos-easing="linear"
     data-aos-duration="1500">
        <div className={styles.introduction}>
          <div className={styles.introText} >
            <h1 data-aos="zoom-in">Helló, én <span className={styles.myName}>Kristóf</span> vagyok, <span className={styles.myName}>weblapfejlesztő.</span></h1>
            <h4 className={styles.introductoryText} data-aos="zoom-in">Szeretnél magadnak egy szuper weboldalt?
              Talán egy olyat, ami interaktív, szép, és tud egy rakás funkciót, amit csak szeretnél.<br></br><br></br>
              Ha igen, akkor remek helyre jöttél. <span className={styles.greetingSpan}>Üdvözöllek!</span>
            </h4>
          </div>
          <Image src="/../public/logo.png" width="500vmin" height="250vmin">

          </Image>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.featuresContainer}>
        <h1 className={styles.featuresH1}>Válaszd ki mi érdekel!</h1>
          <div className={styles.featuresList}>
              {allFeaturesData.allFeaturesData.map(({id, title, description}) => (
                <div className={styles.featureContainer}>
                  <div className={styles.feature} data-aos="zoom-in">
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
        <div className={styles.separatorOther}></div>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesTitle}><p>Amiket kínálok...</p></div>
          <div className={styles.services}>
            <div className={styles.service} data-aos="flip-left">
              <div className={styles.serviceLogo}>
              </div>
              <div className={styles.serviceTitle}>
                <p>Multiplatform fejlesztés</p>
              </div>
              <div className={styles.serviceDescription} >
                <p>Webappok, weblapok, többféle programozási nyelven is, többféle eszközre, többféle céllal és működéssel. Természetesen minden reszponzív.</p>
              </div>
            </div>
            <div className={styles.service} data-aos="flip-right">
              <div className={styles.serviceLogo}></div>
              <div className={styles.serviceTitle}><p>Rugalmasság</p></div>
              <div className={styles.serviceDescription}>
                <p>A kinézetet illetve a Te kezedben van a döntés. Minden úgy fog történni, ahogy elképzeled, de ha rám bízod, akkor se jársz rosszul. Gyorsan és rugalmasan kezelem a változtatásokat, egyéni kéréseket.</p>
              </div>
            </div>
            <div className={styles.service} data-aos="flip-left">
              <div className={styles.serviceLogo}></div>
              <div className={styles.serviceTitle}><p>Szép, egységes tervezés</p></div>
              <div className={styles.serviceDescription}>
                <p>Mindenféle képpen célom, hogy amit Te megkapsz, a lehető legszebben, legletisztultabban nézzen ki, illetve, hogy tökéletesen töltse be a neki szánt szerepet.</p>
              </div>
            </div>
            <div className={styles.service} data-aos="flip-right">
              <div className={styles.serviceLogo}></div>
              <div className={styles.serviceTitle}><p>Gyorsaság és jó ár</p></div>
              <div className={styles.serviceDescription}>
                <p>17 éves fejlesztő vagyok, ezért nyilván nem kérhetem el egy diplomás és sokkal tapasztaltabb programozó árát. Viszont minőségbeli különbséget garantálom, hogy nem fogsz tapasztalni, ellenben sokkal olcsóbban dolgozom.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.iceBreakerContainer}>
                <div className={styles.iceBreaker}>
                  <div className={styles.iceBreakerText1}>
                    <p className={styles.iceBreakerTag}>&lt;Beszélgetéskezdeményező&gt;</p>
                    <p>17 éves vagyok és a Karinthy Frigyes Gimnáziumba járok. Szeretek szinte minden sportot a focin kívül, és imádok beszélni.</p>
                    <p className={styles.iceBreakerTag}>&lt;/Beszélgetéskezdeményező&gt;</p>
                  </div>
                  <div className={styles.iceBreakerSep}></div>
                  <div className={styles.iceBreakerText2}>
                    <p className={styles.iceBreakerTag}>&lt;Beszélgetéskezdeményező&gt;</p>
                    <p>Szeretek rock zenét hallgatni és olvasni. A Twenty One Pilots zenéjét különösen szeretem. Sajnos nagyon szeretem az energiaitalt.</p>
                    <p className={styles.iceBreakerTag}>&lt;/Beszélgetéskezdeményező&gt;</p>
                  </div>
                </div>
        </div>
      </div>
    </Uniform>
    
  )
}
