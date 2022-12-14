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
console.log(reclamo)

const reclamo1= new reclamo(1,111111,"Sarah Ochoa",1126950698,"luly","otra marca","no enciende")
const reclamo2= new reclamo(2,111111,"Isa Molina",1126950698,"joe 3","otra marca","no enciende")
/*
let registroGarantia = []
if(localStorage.getItem("registroGarantia")){
    registroGarantia = JSON.parse(localStorage.getItem(registroGarantia)) 
}else{
    console.log("seteando el array por primera vez")
    registroGarantia.push(reclamo1,reclamo2)
    localStorage.setItem("registroGarantia", JSON.stringify("registroGarantia"))
} 
*/

let registroGarantia = [reclamo1,reclamo2]

console.log(registroGarantia)

//DOM
let form = document.getElementById("form")
//Y le agregas el id "form" a la etiqueta form de tu HTML//

let divReclamos = document.getElementById ("reclamos")
let btnGuardarGarantia = document.getElementById("guardarGarantiaBtn")
let buscador = document.getElementById("buscador")
let btnVerCatalogo = document.getElementById("verGarantias")

function verGarantias(array){

   divReclamos.innerHTML = ""
    for (let reclamo of array){ 
        let nuevoReclamo = document.createElement ("div") 
        nuevoReclamo.innerHTML = ` 
       <span class= "card__garantia"><div  class=" card text-white bg-danger mb-3" style="max-width: 18rem;">
       <div id="${reclamo.id} class="card-header">Garantia ${reclamo.id}</div>
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
     </div>>
     </span> 
        
    
      `
        divReclamos.appendChild(nuevoReclamo)

    }

}
/*
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

console.log(reclamo)
*/
//---------------------------------------------------------------------//
/*Hola de nuevo Maria estoy revisando tu c??digo y encontre varios errores:
1) El array registroGarantia se encontraba vac??o cuando lo pasabas como par??metro en la ??ltima l??nea
2) El evento que debes realizar es el evento sumit al formulario completo y no el evento "click" al bot??n
3) Los .value se los debes agregar cuando tomas el elemento del HTML y no en el constructor
4) El id del input donde colocas el nombre es "clienteInput" y no ""nombreInput
5) Esta porci??n de c??digo te esta devolviendo que tu array registroGarantia sea siempre null. Elim??nala
if(localStorage.getItem("registroGarantia")){
    registroGarantia = JSON.parse(localStorage.getItem(registroGarantia)) 
}else{
    console.log("seteando el array por primera vez")
    registroGarantia.push(reclamo1,reclamo2)
    localStorage.setItem("registroGarantia", JSON.stringify("registroGarantia"))
}*/

function cargarReclamo(array) {
    let inputPedido =  document.getElementById("pedidoInput").value
    console.log(inputPedido)
    let inputNombre = document.getElementById("clienteInput").value
    let inputTelefono = document.getElementById("telefonoInput").value
    let inputProducto = document.getElementById("productoInput").value
    let inputMarca = document.getElementById("marcaInput").value
    let inputFalla = document.getElementById("fallaInput").value
    let reclamoCreado = new  reclamo (array.length+1, inputPedido,inputNombre,inputTelefono,inputProducto,inputMarca,inputFalla)
    console.log(reclamoCreado)
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
form.addEventListener("submit",(e) => {
    e.preventDefault()
    cargarReclamo(registroGarantia)
})