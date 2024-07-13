import React from "react"
import "./FilasVideos.css"
import Cards from "../card/card"
import videos from "data/db.json"

function FilasVideos(props){
    //console.log(videos);
    return(
        <div className="CardFilas">
            <div className="TituloFila" id={ props.color }>{ props.titulo }</div>
            { videos.map((video) => {
                return(
                    <Cards { ...video } key={video.id} color={ props.color } url={ video.url }
                    titulo={ video.titulo }/>   
                )
            }) }           
        </div>
    )
}

export default FilasVideos