class reclamoDevolucion{
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
console.log(reclamoDevolucion)


const devolucion1 = new reclamoDevolucion(1+"D",111111,"Sarah Ochoa",1126950698,"luly","st")
const devolucion2 = new reclamoDevolucion(2+"D",111111,"Isa Molina",1126950698,"joe 3","st")

const registroDevolucion= [devolucion1,devolucion2]

console.log(registroDevolucion)

//DOM
let form = document.getElementById("form")

let divReclamos = document.getElementById ("reclamo")
let btnGuardarCambio = document.getElementById("guardarCambioBtn")
let buscador = document.getElementById("buscador")
let btnVerCatalogo = document.getElementById("verDevoluciones")


function verDevoluciones(array){

   divReclamos.innerHTML = ""
    for (let reclamoDevolucion of array){ 
        let nuevoReclamo = document.createElement ("div") 
        nuevoReclamo.innerHTML = ` 
        <div class="row">  
            <div  class=" card text-white bg-danger mb-3" style="max-width: 18rem;">

                <div id="${reclamoDevolucion.id} class="card-header">Devolución ${reclamoDevolucion.id}</div>
                    <div class="card-body">
                        <h5 class="card-title">${reclamoDevolucion.pedido} </h5>
                        <p class="card-text">  ${reclamoDevolucion.nombre}</p>
                        <p class="card-text">  ${reclamoDevolucion.telefono}</p>
                        <p class="card-text">  ${reclamoDevolucion.producto}</p>
                        <p class="card-text">  ${reclamoDevolucion.marca}</p>
                        <button type="button" class="btn btn-secondary">Eliminar</button>
                    </div>

        </div>

    </div>
  `
        divReclamos.appendChild(nuevoReclamo)

    }

}


function cargarDevolucion(array) {
    let inputPedido =  document.getElementById("pedidoInput").value
    console.log(inputPedido)
    let inputNombre = document.getElementById("clienteInput").value
    let inputTelefono = document.getElementById("telefonoInput").value
    let inputProducto = document.getElementById("productoInput").value
    let inputMarca = document.getElementById("marcaInput").value
    let reclamoCreado = new  reclamoDevolucion (array.length+1, inputPedido,inputNombre,inputTelefono,inputProducto,inputMarca)
    console.log(reclamoCreado)
    array.push(reclamoCreado)

    localStorage.setItem("registroDevolucion",JSON.stringify(array))
    verDevoluciones(array)
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
    cargarDevolucion(registroDevolucion)
})


let btnVerificarFecha = document.getElementById("verificarFechaBtn")
btnVerificarFecha.addEventListener("click", (verificarFechaDevolucion))

function verificarFechaDevolucion() {
    let fechaCompra = new Date(document.getElementById("fechaCompra").value);
    let fechaActual = new Date(document.getElementById("fechaActual").value);
    let milisegundosdia =  24 * 60 * 60 * 1000
    let milisegundosTranscurridos = Math.abs(fechaCompra.getTime() - fechaActual.getTime())
    let diasTranscurridos = Math.round(milisegundosTranscurridos / milisegundosdia)
    console.log(`la cantidad de días transcurridos desde la compra es: ${diasTranscurridos}`)
    alert(`la cantidad de días transcurridos desde la compra es: ${diasTranscurridos}`)
    if (diasTranscurridos <= 10) {
        alert("El Producto esta dentro del tiempo de devolucion")
    } else {
        alert("EL PRODUCTO SE ENCUENTRA FUERA DEL TIEMPO PARA REALIZAR LA DEVOLUCION")
    }
    fechaCompra.value = ""
    fechaActual.value = ""

}
