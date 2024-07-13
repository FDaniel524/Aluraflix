function ventanaCrear(){
    const ventana = document.getElementById("ContainerCrearVideo");
    var tama = document.body.clientHeight;
    tama = tama + "px";
    console.log(tama);
    if(ventana.className === "CrearVideoVisible"){
        ventana.className = "desactivado";
    }

    else{
        ventana.className = "CrearVideoVisible";
        ventana.style.height = tama;
    }
}

export default ventanaCrear