import "./CardsContainer.css"
import FilasVideos from "../FilasVideos/FilasVideos"

function CardsContainer(){
    return(
        <div className="CardsContainer">
            <FilasVideos titulo="FRONT END" color="Frontend"/>
            <FilasVideos titulo="BACK END" color="Backend"/>
            <FilasVideos titulo="INNOVACIÓN Y GESTIÓN" color="Innovacion"/>
        </div>
    )
}

export default CardsContainer