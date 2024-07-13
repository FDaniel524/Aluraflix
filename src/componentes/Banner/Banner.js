import "./Banner.css"
import CardTextoBanner from "./CardTextoBanner/CardTextoBanner"
import CardVideoBanner from "./CardVideoBanner/CardVideoBanner"

function Banner(){
    return(
        <section className="bannerPrincipal">
            <img src="/media/banner.jpg" alt="Banner princpal"/>
            <CardTextoBanner />
            <CardVideoBanner />
        </section>
    )
}

export default Banner