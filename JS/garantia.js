// SECCION DE GARANTIA
class reclamo {
    constructor(id, pedido, nombre, telefono, producto, marca, falla) {
            this.id = id,
            this.pedido = pedido,
            this.nombre = nombre,
            this.telefono = telefono,
            this.producto = producto,
            this.marca = marca,
            this.falla = falla

    }

    mostrardatos() {
        console.log(`Datos de la Solicitud:
        NUMERO DE RECLAMO:    ${this.id}
        NUMERO DE PEDIDO:     ${this.pedido}
        NOMBRE DE CLIENTE:    ${this.nombre}
        NUMERO DE TELEFONO:   ${this.telefono}
        NOMBRE DEL PRODUCTO:  ${this.producto}
        NOMBRE DE LA MARCA:   ${this.marca}
        NOMBRE DE LA FALLA:   ${this.falla}`)
    }
}
console.log(reclamo)

const reclamo1 = new reclamo(1+"G", 111111, "Sarah Ochoa", 1126950698, "luly", "otra marca", "no enciende")
const reclamo2 = new reclamo(2+"G", 111111, "Isa Molina", 1126950698, "joe 3", "otra marca", "no enciende")


let registroGarantia = [reclamo1, reclamo2]

console.log(registroGarantia)

//DOM
let form = document.getElementById("formGarantia")

let divReclamos = document.getElementById("reclamosGarantia")
let btnGuardarGarantia = document.getElementById("guardarGarantiaBtn")
let btnVerCatalogo = document.getElementById("verGarantias")



function verGarantias(array) {

    divReclamos.innerHTML = ""
    for (let reclamo of array) {
        let nuevoReclamo = document.createElement("div")
        nuevoReclamo.innerHTML = ` 
       
                <div class="row">    

                    <div  class=" card text-white bg-danger mb-3" style="max-width: 18rem;">
                            <div id="${reclamo.id} class="card-header">Garantia ${reclamo.id}</div>

                                <div class="card-body">
                                    <h5 class="card-title">${reclamo.pedido} </h5>
                                    <p class="card-text">  ${reclamo.nombre}</p>
                                    <p class="card-text">  ${reclamo.telefono}</p>
                                    <p class="card-text">  ${reclamo.producto}</p>
                                    <p class="card-text">  ${reclamo.marca}</p>
                                    <p class="card-text">  ${reclamo.falla}</p>
                                    <button type="button" class="btn btn-secondary">Eliminar</button>
                                
                                </div>
                    </div>

                
                </div>
        
       

      `
        divReclamos.appendChild(nuevoReclamo)

    }

}


function cargarReclamo(array) {
    let inputPedido = document.getElementById("pedidoInput").value
    console.log(inputPedido)
    let inputNombre = document.getElementById("clienteInput").value
    let inputTelefono = document.getElementById("telefonoInput").value
    let inputProducto = document.getElementById("productoInput").value
    let inputMarca = document.getElementById("marcaInput").value
    let inputFalla = document.getElementById("fallaInput").value
    let reclamoCreado = new reclamo(array.length + 1 + "G", inputPedido, inputNombre, inputTelefono, inputProducto, inputMarca, inputFalla)
    console.log(reclamoCreado)
    array.push(reclamoCreado)
    
    localStorage.setItem("registroGarantia", JSON.stringify(array))
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
formGarantia.addEventListener("submit", (e) => {
    e.preventDefault()
    cargarReclamo(registroGarantia)
})


let btnVerificarFecha = document.getElementById("verificarFechaBtn")
btnVerificarFecha.addEventListener("click", (verificarFechaGarantia))

function verificarFechaGarantia() {
    let fechaCompra = new Date(document.getElementById("fechaCompra").value);
    let fechaActual = new Date(document.getElementById("fechaActual").value);
    let milisegundosMes = 4.345 * 7 * 24 * 60 * 60 * 1000
    let milisegundosTranscurridos = Math.abs(fechaCompra.getTime() - fechaActual.getTime())
    let mesesTranscurridos = Math.round(milisegundosTranscurridos / milisegundosMes)
    console.log(`la cantidad de meses transcurridos desde la compra es: ${mesesTranscurridos}`)
    if (mesesTranscurridos<6) {
        Toastify({
          text: `la cantidad de meses transcurridos desde la compra es: ${mesesTranscurridos}
           el producto se encuentra dentro del tiempo de garantía`,
          duration: 5000,
          close: true,
          gravity: "top",
          position: 'center',
          backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)"
        }).showToast();

     }else if(mesesTranscurridos>=6){
        Toastify({
            text: `la cantidad de meses transcurridos desde la compra es: ${mesesTranscurridos}
            el producto se encuentra FUERA GARANTIA `,
            duration: 5000,
            close: true,
            gravity: "top",
            position: 'center',
            backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)"
          }).showToast();
    
     }

     }

    
    fechaCompra.value = ""
    fechaActual.value = ""
    
  

 
/*
if (isValid) {
    Toastify({
      text: "Inicio de sesión exitoso!",
      duration: 3000,
      close: true,
      gravity: "top",
      position: 'right',
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)"
    }).showToast();
  } else {
    // Si el inicio de sesión falla, mostrar un mensaje de error
    Toastify({
      text: "Usuario o contraseña incorrectos",
      duration: 3000,
      close: true,
      gravity: "top",
      position: 'right',
      backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)"
    }).showToast();
  }*/