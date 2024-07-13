import "./CrearVideo.css"
import ventanaCrear from "../../js/crearVideo"
import limpiar from "../../js/limpiarForm"
import CampoTextoCrear from "componentes/CrearVideoInputs/CrearVideoInputs"
import CrearVideoOptions from "componentes/CrearVideoOptions/CrearVideoOptions"
import CrearVideoTextArea from "componentes/CrearVideoTextArea/CrearVideoTextArea"
import { useState } from "react"

import { conexionAPI } from "js/conexionAPI"

function CrearVideo(){
    const [Titulo, actualizarTitulo] = useState("")
    const [Categoria, actualizarCategoria] = useState("")
    const [url, actualizarurl] = useState("")
    const [enlacevideo, actualizarVideo] = useState("")
    const [Descripcion, actualizarDescripcion] = useState("")

    const manejarEnvioCrear = (evento) => {
        evento.preventDefault();
        
        let datosAEnviar = {
            Titulo,
            Categoria,
            url,
            enlacevideo,
            Descripcion
        }
        console.log(datosAEnviar);

        try
        {
            conexionAPI.crearNuevoVideo(Titulo,Categoria,enlacevideo, Descripcion, url);
        }catch(e){
            alert(e);
        }

    }
    return(
        <div className="desactivado" id="ContainerCrearVideo">
            <img src="/media/cerrar.png" id="cerrarEditar" onClick={ventanaCrear} alt="Cerrar"/>
            <h1>NUEVO VIDEO</h1>
            <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
            <h2>CREAR TARJETA</h2>
            <form id="FormularioCrearVideo" onSubmit={manejarEnvioCrear}>
                <CampoTextoCrear 
                    nombre = "Titulo"
                    placeholder = "Ingrese un titulo"
                    required
                    valor= {Titulo}
                    actualizarValor = {actualizarTitulo}
                />

                <CrearVideoOptions
                    nombre = "Categoria"
                    placeholder = "Ingrese un titulo"
                    required
                    valor= {Categoria}
                    actualizarValor = {actualizarCategoria}
                />

                <CampoTextoCrear 
                    nombre = "Imagen"
                    placeholder = "https://www.google.com/..."
                    required
                    valor= {url}
                    actualizarValor = {actualizarurl}
                />

                <CampoTextoCrear 
                    nombre = "Video"
                    placeholder = "https://www.youtube.com/video..."
                    required
                    valor= {enlacevideo}
                    actualizarValor = {actualizarVideo}
                />

                <CrearVideoTextArea
                    nombre = "Descripción"
                    placeholder = "De qué trata el video?"
                    required
                    valor= {Descripcion}
                    actualizarValor = {actualizarDescripcion}
                /> 

                <div className="BotonesFormulario">
                    <button id="guardarEditar">Guardar</button>
                    <button onClick={limpiar}>Reset</button>
                </div>
                <br></br>
            </form>
        </div>
    )
}

export default CrearVideo