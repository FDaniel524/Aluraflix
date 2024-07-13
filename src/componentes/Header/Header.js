import "./Header.css"
import ventanaCrear from "../../js/crearVideo"

function Header()
{
    return(
        <header className="header">
            <img src="/media/logo.png" alt="Aluraflix" />
            <div className="botonesHeader">
                <button type="button" id="btnHome">HOME</button>
                <button type="button" id="btnNuevoVideo" onClick={ventanaCrear}>NUEVO VIDEO</button>
            </div>
        </header>
    )
}

export default Header