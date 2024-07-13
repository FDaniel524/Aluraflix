import React from "react"
import "./FilasVideos.css"
import Cards from "../card/card"
//import videos from "data/db.json"
import videos from "data/database.json"

function FilasVideos(props){
    //Convertimos el objeto database a un string
    var tablaConvertida = JSON.stringify(videos);
    //Tomamos la longitud de ese string :)
    const longitud = tablaConvertida.length;
    //Tomamos parte de es string con la longitud :))
    tablaConvertida = tablaConvertida.substring(longitud -1 ,10);
    //Regresamos esa subcadena en un objeto :)))
    tablaConvertida = JSON.parse(tablaConvertida)
    return(
        <div className="CardFilas">
            <div className="TituloFila" id={ props.color }>{ props.titulo }</div>
            {
            tablaConvertida.map((video) => {
                return(
                    <Cards { ...video } key={video.id} color={ props.color } 
                    idUnico={ video.id }
                    titulo={ video.Titulo }
                    url={ video.url } 
                    categoria= { video.Categoria}
                    video= { video.Video } 
                    descripcion = { video.Descripcion }/>   
                )
            }) 
            }           
        </div>
    )
}

export default FilasVideos