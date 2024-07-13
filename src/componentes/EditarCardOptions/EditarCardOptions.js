
function EditarCardOptions(props)
{
    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }

    return(
        <div className="ContainerCampos">
            <label>{ props.nombre }</label>
            <select name="Categoria" value={props.Categoria} onChange = {manejarCambio} id={ props.id }>
                <option hidden>Seleccione una Categoría</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Innovacion">Innovación y gestión</option>
            </select>
        </div>
    )
}

export default EditarCardOptions