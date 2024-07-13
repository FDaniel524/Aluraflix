import "./card.css"
import ventanaEditar from "../../js/editarvideo"
import { conexionAPI } from "js/conexionAPI"; //editar y eliminar videos

function Cards(props)
{
    if(props.Categoria === props.color)
    {
    return(
        <div className={ props.color }>
            <img src={ props.url } alt={ props.titulo }/>
            <div className="botoneraCards">
            <div className="botonesCards" id={ props.idUnico } onClick={ () => conexionAPI.EliminarVideo( props.idUnico ) }>
                    <img src="/media/borrar.png" alt="Borrar"/><p>BORRAR</p>
                </div>
                <div className="botonesCards" onClick={() => ventanaEditar(props)}>
                    <img src="/media/editar.png" alt="Editar"/><p>EDITAR</p>
                </div>
            </div>
        </div>
    )
    }
}

export default Cards