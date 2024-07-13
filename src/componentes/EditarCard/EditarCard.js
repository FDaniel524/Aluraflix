import "./EditarCard.css"
import ventanaEditar from "../../js/editarvideo"
import limpiar from "js/limpiarForm"
import { useState } from "react"
import { conexionAPI } from "js/conexionAPI"

import EditarCardInputs from "componentes/EditarCardInputs/EdtarCardInputs"
import EditarCardOptions from "componentes/EditarCardOptions/EditarCardOptions"
import EditarCardTextArea from "componentes/EditarCardTextArea/EditarCardTextArea"

function EditarCard(){
    const [TituloEditar, actualizarTituloEditar] = useState("")
    const [Categoria, actualizarCategoria] = useState("")
    const [url, actualizarurl] = useState("")
    const [enlacevideo, actualizarVideo] = useState("")
    const [Descripcion, actualizarDescripcion] = useState("")

    const manejarEnvioCrear = (evento) => {
        evento.preventDefault()
        //console.log("Manejar el envio", evento);
    }

    return(
        <div className="desactivado" id="ContainerEditarCard">
            <form onSubmit={manejarEnvioCrear} id="FormularioEditarVideo">
            <img src="/media/cerrar.png" id="cerrarEditar" alt="Editar" onClick={ventanaEditar}/>
                <h1>EDITAR CARD:</h1>
                <EditarCardInputs
                    nombre = "Titulo"
                    placeholder = "Qué es Javascript?"
                    required
                    valor= {TituloEditar}
                    actualizarValor = {actualizarTituloEditar}
                    id = "TituloEditar" 
                />

                <EditarCardOptions 
                    nombre = "Categoria"
                    placeholder = "Elige una opción"
                    required
                    valor= {Categoria}
                    actualizarValor = {actualizarCategoria}
                    id = "CategoriaEditar"
                />

                <EditarCardInputs
                    nombre = "Imagen"
                    placeholder = "https://www.google.com/..."
                    required
                    valor= {url}
                    actualizarValor = {actualizarurl}
                    id = "ImagenEditar" 
                />

                <EditarCardInputs
                    nombre = "Video"
                    placeholder = "https://www.youtube.com/video..."
                    required
                    valor= {enlacevideo}
                    actualizarValor = {actualizarVideo}
                    id = "VideoEditar" 
                />
                
                <EditarCardTextArea
                    nombre = "Descripción"
                    placeholder = "Agrega una pequeña descripción"
                    required
                    valor= {Descripcion}
                    actualizarValor = {actualizarDescripcion}
                    id= "DescripcionEditar"
                />

                <div className="BotonesFormulario">
                    <button id="guardarEditar" onClick={conexionAPI.EditarVideo}>Guardar</button>
                    <button onClick={limpiar}>Limpiar</button>
                </div>
            </form>
        </div>
    )
}

export default EditarCard