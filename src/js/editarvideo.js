function ventanaEditar(datos){
    const ventana = document.getElementById("ContainerEditarCard");
    var tama = document.body.clientHeight;
    tama = tama + "px";

    if(ventana.className === "EditarCardVisible")
    {
        ventana.className = "desactivado";
    }

    else{

        /*
        NO BORRAR NUUUUUNCA
        const [items, setItems] = useState([]);
        useEffect(() => { setItems( videos ); }, []);
        const Eliminar = (id) => {const newItems = items.filter((item) => item.id !== id);
        */
        localStorage.setItem("IdAEditar", datos.id)
        document.querySelector("#TituloEditar").value = datos.titulo;
        document.querySelector("#ImagenEditar").value = datos.url;
        document.querySelector("#VideoEditar").value = datos.video;
        document.querySelector("#DescripcionEditar").value = datos.descripcion;
        document.querySelector("#CategoriaEditar").value = datos.categoria;

        ventana.className = "EditarCardVisible";
        ventana.style.height = tama;
    }
}

export default ventanaEditar