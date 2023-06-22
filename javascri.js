let selecciones
let img
setTimeout(Tablero, 1);
setTimeout(aplicarFiltro, 1);
Tablero();

function generarimg(){
    img = [
        '<img src="https://www.turing.com/blog/wp-content/uploads/2022/02/Mongo-DB-Features.jpg" >',
        '<img src="https://www.bigbaydata.com/wp-content/uploads/2022/11/sql_ejercicios.png" width="100%">',
        '<img src="https://1000marcas.net/wp-content/uploads/2021/06/Django-Logo.png" ">',
        '<img src="https://nodd3r.com/media/blog/Portadas_blog_21.png" >',
        '<img src="https://global-uploads.webflow.com/5f5a53e153805db840dae2db/6073fbf151fa4565d48572dc_GitHub_aprender-programaci%25C3%25B3n.jpeg" >',
        '<img src="https://cdn-icons-png.flaticon.com/512/3937/3937040.png" width="100%">',
   
    ]
}
function Tablero() {
    generarimg()
    let len = img.length
    selecciones = []
    var tablero = document.getElementById("juego")
    let tarjetas = []
    let xd=0
    for(let a=0;a<2; a++){
        for (let i = 0; i < len; i++) {
            xd=xd+1
            tarjetas.push(`<a onclick="seleccionarTarjeta(${xd})" class="${i}" id="${xd}">${img[i]}</a>`)
    }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
    setTimeout(aplicarFiltro, 5000);

}


function aplicarFiltro() {
    let len = img.length
    for (let i = 1; i < (len*2)+1; i++) {
        var miImagen = document.getElementById(i);
        miImagen.style.filter = "brightness(0%) opacity(0.4) drop-shadow(0 0 0 rgb(0, 255, 17))"
    }
    
}

function seleccionarTarjeta(i) {
    var miImagen=document.getElementById(i)
    if ( miImagen.style.filter != "none"){
        miImagen.style.filter = "none"       
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
    

    /**/
    
}
function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById(selecciones[0])
        let trasera2 = document.getElementById(selecciones[1])
        let id1=selecciones[0]
        let id2=selecciones[1]
        if (id1 > img.length ){
            if(id1-img.length==id2){
            }else{
                trasera1.style.filter = "brightness(0%) opacity(0.4) drop-shadow(0 0 0 rgb(0, 255, 17))"
                trasera2.style.filter = "brightness(0%) opacity(0.4) drop-shadow(0 0 0 rgb(0, 255, 17))"
            }
        }
        if (id1<=img.length){
            if(id1+img.length==id2){
            }else{
                trasera1.style.filter = "brightness(0%) opacity(0.4) drop-shadow(0 0 0 rgb(0, 255, 17))"
                trasera2.style.filter = "brightness(0%) opacity(0.4) drop-shadow(0 0 0 rgb(0, 255, 17))"
            }
        }
        
    }, 1000);
}
