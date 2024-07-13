async function listarVideos()
{
    const conexion = await fetch("http://localhost:3001/videos"); //Peticion tipo GET
    const conexionConvertida = conexion.json();
    //console.log(conexionConvertida);
    return conexionConvertida;
}

async function crearNuevoVideo(Titulo,Categoria,enlacevideo, Descripcion, url)
{
    const conexion = await fetch("http://localhost:3001/videos", {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({
            Titulo: Titulo,
            Categoria: Categoria,
            Video: enlacevideo,
            Descripcion: Descripcion,
            url: url
        })
    }); //Peticion tipo POST

    const conexionConvertida = conexion.json();

    //Renderizacion de animacion para confirmar operacion
    var tama = document.body.clientHeight;
    tama = tama + "px";
    document.getElementById("ResultadoCrear").className = "containerResultadoCrear";
    document.getElementById("ResultadoCrear").style.height = tama;
    
    setTimeout(() => {
        document.getElementById("ResultadoCrear").className = "oculto";
        document.getElementById("ContainerCrearVideo").className = "desactivado"}, 3000);

    return conexionConvertida;
}

async function EliminarVideo(id)
{
    const contenido = {
        method: "DELETE",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
    }//Petción tipo DELETE

    try 
    {
        const url = `http://localhost:3001/videos/${id}`
        const response = await fetch(url, contenido)
        const data = await response.json()

        //Renderizacion de animacion para confirmar operacion
        var tama = document.body.clientHeight;
        tama = tama + "px";
        document.getElementById("ResultadoEliminar").className = "containerResultadoBorrar";
        document.getElementById("ResultadoEliminar").style.height = tama;
        
        setTimeout(() => {
            document.getElementById("ResultadoEliminar").className = "oculto"}, 3000);

        return data
    } catch (e) {
        console.log('Error', e)
        return e
      }
}

async function EditarVideo()
{
    const id = localStorage.getItem("IdAEditar");

    const contenido = {
        method: "PUT",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Titulo: document.getElementById("TituloEditar").value,
            Categoria: document.querySelector("#CategoriaEditar").value,
            Video: document.querySelector("#VideoEditar").value,
            Descripcion: document.querySelector("#DescripcionEditar").value,
            url: document.querySelector("#ImagenEditar").value
        })
    }//Petción tipo PUT

    try 
    {
        const url = `http://localhost:3001/videos/${id}`
        const response = await fetch(url, contenido)
        const data = await response.json()

        //Renderizacion de animacion para confirmar operacion
        var tama = document.body.clientHeight;
        tama = tama + "px";
        document.getElementById("ResultadoConsulta").className = "containerResultado";
        document.getElementById("ResultadoConsulta").style.height = tama;
        
        setTimeout(() => {
            document.getElementById("ResultadoConsulta").className = "oculto";
            document.getElementById("ContainerEditarCard").className = "desactivado"}, 3000);

        return data
    } catch (e) {
        console.log('Error', e)
        return e
      }
}

export const conexionAPI =
{
    crearNuevoVideo, listarVideos, EliminarVideo, EditarVideo
}