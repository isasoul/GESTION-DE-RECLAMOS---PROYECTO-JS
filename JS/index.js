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
