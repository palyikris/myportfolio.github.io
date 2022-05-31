import {useRouter} from 'next/router'


export default function PortfolioProjectPage() {

    const router = useRouter()

    console.log(router.query)

    return(
        <div>
            <p>PortfolioProjectPage</p>
        </div>
    )
}