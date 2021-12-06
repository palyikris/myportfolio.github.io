import { getAllFeaturesId, getFeaturesData } from "../lib/features"
import Head from "next/head"
import Uniform from "../components/uniformComponents"


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
    return (
        <Uniform>
            <Head>
                <title>{featuresData.title}</title>
            </Head>
            <article>
                <h1 >{featuresData.title}</h1>
                <br />
                <br />
                <div dangerouslySetInnerHTML = {{ __html: featuresData.contentHtml}} />
            </article>
        </Uniform>
    )
}