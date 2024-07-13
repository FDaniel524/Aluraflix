function CrearVideoTextArea(props)
{
    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }

    return(
        <div className="ContainerCampos" id="containerArea">
            <label>{ props.nombre }</label>
            <textarea type="text" 
                placeholder={ props.placeholder }
                required = { props.required } 
                value= { props.Titulo }
                onChange = { manejarCambio }>
            </textarea>
        </div> 
    )
}

export default CrearVideoTextArea