// SECCION DE RECLAMOS
class reclamo {
    constructor(id, pedido, nombre, telefono, producto, marca,falla){
        this.id = id,
        this.pedido = pedido,
        this.nombre = nombre,
        this.telefono = telefono,
        this.producto = producto,
        this.marca = marca,
        this.falla = falla

    }

    mostrardatos(){
        console.log(`Datos de la Solicitud:
        NUMERO DE RECLAMO:    ${this.id}
        NUMERO DE PEDIDO:     ${this.pedido}
        NOMBRE DE CLIENTE:    ${this.nombre}
        NUMERO DE TELEFONO:   ${this.telefono}
        NOMBRE DEL PRODUCTO:  ${this.producto}
        NOMBRE DE LA MARCA:   ${this.marca}
        NOMBRE DE LA FALLA:   ${this.falla}` )
    }
}

const reclamo1= new reclamo(1,111111,"Sarah Ochoa",1126950698,"luly","otra marca")
const reclamo2= new reclamo(2,111111,"Isa Molina",1126950698,"joe 3","otra marca")

let registroGarantia = []
if(localStorage.getItem("registroGarantia")){
    registroGarantia = JSON.parse(localStorage.getItem(registroGarantia)) 
}else{
    console.log("seteando el array por primera vez")
    registroGarantia.push(reclamo1,reclamo2)
    localStorage.setItem("registroGarantia", JSON.stringify("registroGarantia"))
}   

console.log(registroGarantia)

//DOM
let divReclamos = document.getElementById ("reclamos")
let btnGuardarGarantia = document.getElementById("guardarGarantiaBtn")
let buscador = document.getElementById("buscador")
let btnVerCatalogo = document.getElementById("verGarantias")

function verGarantias(array){

   divReclamos.innerHTML = ""
    for (let reclamo of array){
        let nuevoReclamo = document.createElement ("div")
        nuevoReclamo.innerHTML = ` 
        <div  class="card text-white bg-danger mb-3" style="max-width: 18rem;">
          <div id="${reclamo.id} class="card-header">Garantia</div>
          <div class="card-body">
            <h5 class="card-title">${reclamo.pedido} </h5>
            <p class="card-text">  ${reclamo.nombre}</p>
            <p class="card-text">  ${reclamo.telefono}</p>
            <p class="card-text">  ${reclamo.producto}</p>
            <p class="card-text">  ${reclamo.marca}</p>
            <p class="card-text">  ${reclamo.falla}</p>
            <button type="button" class="btn btn-secondary">Eliminar</button>
            <button type="button" class="btn btn-light">Editar</button>
          </div>
        </div>>`
        divReclamos.appendChild(nuevoReclamo)

    }

}
//funcion para agregar libros :
function cargarReclamo(array) {
    let inputPedido =  document.getElementById("pedidoInput")
    let inputNombre = document.getElementById("nombreInput")
    let inputTelefono = document.getElementById("telefonoInput")
    let inputProducto = document.getElementById("productoInput")
    let inputMarca = document.getElementById("marcaInput")
    let inputFalla = document.getElementById("fallaInput")
    let reclamoCreado = new  reclamo (array.length+1, inputPedido.value,inputNombre.value,inputTelefono.value,inputProducto.value,inputMarca.value,inputFalla.value)
    array.push(reclamoCreado)
    localStorage.setItem("registroGarantia",JSON.stringify(array))
    verGarantias(array)
    console.log(array)
    inputPedido.value = ""
    inputNombre.value = ""
    inputTelefono.value = ""
    inputProducto.value = ""
    inputMarca.value = ""
    inputFalla.value = ""
}
//evento
btnGuardarGarantia.addEventListener("click",()=>{cargarReclamo(registroGarantia)})
verGarantias(registroGarantia)