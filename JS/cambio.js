class reclamoCambio{
    constructor(id, pedido, nombre, telefono, producto, marca){
        this.id = id,
        this.pedido = pedido,
        this.nombre = nombre,
        this.telefono = telefono,
        this.producto = producto,
        this.marca = marca
        
    }

    mostrardatos(){
        console.log(`Datos de la Solicitud:
        NUMERO DE RECLAMO:    ${this.id}
        NUMERO DE PEDIDO:     ${this.pedido}
        NOMBRE DE CLIENTE:    ${this.nombre}
        NUMERO DE TELEFONO:   ${this.telefono}
        NOMBRE DEL PRODUCTO:  ${this.producto}
        NOMBRE DE LA MARCA:   ${this.marca}
        ` )
    }
}

const cambio1 = new reclamoCambio(1,111111,"Sarah Ochoa",1126950698,"luly","st")
const cambio2 = new reclamoCambio(2,111111,"Isa Molina",1126950698,"joe 3","st")
const registroCambio= [cambio1,cambio2]

console.log(registroCambio)

//DOM
let form = document.getElementById("form")

let divReclamos = document.getElementById ("reclamos")
let btnGuardarCambio = document.getElementById("guardarCambioBtn")
let buscador = document.getElementById("buscador")
let btnVerCatalogo = document.getElementById("verGarantias")


function verCambios(array){

   divReclamos.innerHTML = ""
    for (let reclamoCambio of array){ 
        let nuevoReclamo = document.createElement ("div") 
        nuevoReclamo.innerHTML = ` 
       <span class= "card__garantia"><div  class=" card text-white bg-danger mb-3" style="max-width: 18rem;">
       <div id="${reclamoCambio.id} class="card-header">Cambio ${reclamoCambio.id}</div>
       <div class="card-body">
         <h5 class="card-title">${reclamoCambio.pedido} </h5>
         <p class="card-text">  ${reclamoCambio.nombre}</p>
         <p class="card-text">  ${reclamoCambio.telefono}</p>
         <p class="card-text">  ${reclamoCambio.producto}</p>
         <p class="card-text">  ${reclamoCambio.marca}</p>
         <button type="button" class="btn btn-secondary">Eliminar</button>
         <button type="button" class="btn btn-light">Editar</button>
       </div>
     </div>>
     </span> 

      `
        divReclamos.appendChild(nuevoReclamo)

    }

}


function cargarCambio(array) {
    let inputPedido =  document.getElementById("pedidoInput").value
    console.log(inputPedido)
    let inputNombre = document.getElementById("clienteInput").value
    let inputTelefono = document.getElementById("telefonoInput").value
    let inputProducto = document.getElementById("productoInput").value
    let inputMarca = document.getElementById("marcaInput").value
    let reclamoCreado = new  reclamoCambio (array.length+1, inputPedido,inputNombre,inputTelefono,inputProducto,inputMarca)
    console.log(reclamoCreado)
    array.push(reclamoCreado)
    localStorage.setItem("registroCambio",JSON.stringify(array))
    verCambios(array)
    console.log(array)
    inputPedido.value = ""
    inputNombre.value = ""
    inputTelefono.value = ""
    inputProducto.value = ""
    inputMarca.value = ""
    
}
//evento
form.addEventListener("submit",(e) => {
    e.preventDefault()
    cargarCambio(registroCambio)
})
/*
function cambio(){
    let fecha1 = new Date(prompt("ingrese la fecha del dia en formato mm/dd/aa")) //fecha del dia
    let fecha2 = new Date(prompt("ingrese la fecha en que recibió el producto o lo compró presencial en formato mm/dd/aa")) //fecha nueva
    let milisegundosdia= 24*60*60*1000
    let milisegundosTranscurridos = Math.abs(fecha1.getTime()- fecha2.getTime())
    let diasTranscurridos = Math.round(milisegundosTranscurridos/milisegundosdia)
    console.log(`la cantidad de días transcurridos desde la compra es: ${diasTranscurridos}`)
*/

let btnVerificarFecha = document.getElementById("verificarFechaBtn")
btnVerificarFecha.addEventListener("click", (verificarFechaCambio))
function verificarFechaCambio() {
    let fechaCompra = new Date(document.getElementById("fechaCompra").value);
    let fechaActual = new Date(document.getElementById("fechaActual").value);
    let milisegundosdia =  24 * 60 * 60 * 1000
    let milisegundosTranscurridos = Math.abs(fechaCompra.getTime() - fechaActual.getTime())
    let diasTranscurridos = Math.round(milisegundosTranscurridos / milisegundosdia)
    console.log(`la cantidad de días transcurridos desde la compra es: ${diasTranscurridos}`)
    alert(`la cantidad de días transcurridos desde la compra es: ${diasTranscurridos}`)
    if (diasTranscurridos <= 30) {
        alert("El Producto esta dentro del tiempo de cambio")
    } else {
        alert("EL PRODUCTO SE ENCUENTRA FUERA DEL TIEMPO PARA REALIZAR EL CAMBIO")
    }
    fechaCompra.value = ""
    fechaActual.value = ""

}
