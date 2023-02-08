//INICIO DE SESION
let bandera = true
 while(bandera){
let usuario = prompt("ingrese nombre de usuario")
let claveIngreso = parseInt(prompt("ingrese contraseña"))

if(usuario.toLowerCase() == "sgrbuttman" && claveIngreso == 151515){
    console.log("bienvenido al Sistema de Gestión de Reclamos");
    alert("bienvenido al Sistema de Gestión de Reclamos");
    bandera =false;
}else{
    alert("los datos ingresados son incorrectos");
}
}

// usuario = sgrbuttman / clave = 151515


let buscador = document.getElementById("buscador")
buscador.addEventListener("click",(buscarPorReclamo))
function buscarPorReclamo (array){
    let reclamoBuscado = parseInt(prompt("Ingrese el numero de reclamo que desea buscar"))
    let reclamoEncontrado = array.find(
        (reclamo)=>reclamo.id == reclamoBuscado
    )
    if (reclamoEncontrado == undefined){
        console.log(`El reclamo numero ${reclamoBuscado} no se encuentra en el registro de garantías`)
    }else{
        console.log(reclamoEncontrado)
    }
}
