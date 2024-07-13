import "./ResultadoBorrar.css"

function ResultadoBorrar()
{
    return(
        <div className="oculto" id="ResultadoEliminar">
            <div className="ResultadoDecripcionEliminar">
                <img src="../media/videoeliminado.gif" alt="Eliminado exitosamente"/>
                <h1>VIDEO BORRADO CORRECTAMENTE!</h1>
            </div>
        </div>
    )
}

export default ResultadoBorrar