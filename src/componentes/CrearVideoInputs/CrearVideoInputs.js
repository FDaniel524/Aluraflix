import "./CrearVideoInputs.css"
//import { useState } from "react"

function CampoTextoCrear(props)
{
    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }

    return(
        <div className="ContainerCampos">
            <label>{ props.nombre }</label>
            <input type="text" 
                placeholder= { props.placeholder }
                required = { props.required }
                value= { props.Titulo }
                onChange= { manejarCambio }
            />
        </div>
    )
}

export default CampoTextoCrear