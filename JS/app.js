/*//INICIO DE SESION
let bandera = true
 while(bandera){
let usuario = prompt("ingrese nombre de usuario")
let claveIngreso = parseInt(prompt("ingrese contraseña"))

if(usuario == "sgrbuttman" && claveIngreso == 151515){
    console.log("bienvenido al Sistema de Gestión de Reclamos");
    alert("bienvenido al Sistema de Gestión de Reclamos");
    bandera =false;
}else{
    alert("los datos ingresados son incorrectos");
}
}

// usuario = sgrbuttman / clave = 151515
*/
//--------------------------------FIN INDEX------------------------------------------------------------------------
/*
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
*/
// ---------------------------------------SECCION DE GARANTIA----------------------------------------------------
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
let formGarantia = document.getElementById("form")

let divReclamosGarantia = document.getElementById("reclamosGarantia")
let btnGuardarGarantia = document.getElementById("guardarGarantiaBtn")
let btnVerCatalogoGarantia = document.getElementById("verGarantias")



function verGarantias(array) {

    divReclamosGarantia.innerHTML = ""
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
        divReclamosGarantia.appendChild(nuevoReclamo)

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


let btnVerificarFechaGarantia = document.getElementById("verificarFechaBtn")
btnVerificarFechaGarantia.addEventListener("click", (verificarFechaGarantia))

function verificarFechaGarantia() {
    let fechaCompra = new Date(document.getElementById("fechaCompra").value);
    let fechaActual = new Date(document.getElementById("fechaActual").value);
    let milisegundosMes = 4.345 * 7 * 24 * 60 * 60 * 1000
    let milisegundosTranscurridos = Math.abs(fechaCompra.getTime() - fechaActual.getTime())
    let mesesTranscurridos = Math.round(milisegundosTranscurridos / milisegundosMes)
    console.log(`la cantidad de meses transcurridos desde la compra es: ${mesesTranscurridos}`)
    alert(`la cantidad de meses transcurridos desde la compra es: ${mesesTranscurridos}`)
    if (mesesTranscurridos <6) {
        alert("El Producto esta dentro del tiempo de garantía")
    } else {
        alert("EL PRODUCTO SE ENCUENTRA FUERA DEL TIEMPO DE GARANTIA")
    }
    fechaCompra.value = ""
    fechaActual.value = ""

}
//-----------------------------------------FIN SECCION GARANTIA--------------------------------------------------------
//-----------------------------------------INICIO REGISTRO GARANTIA--------------------------------------------------------
let  formResolucionGarantia = document.getElementById("formResolucion")
const datosGarantia = JSON.parse(localStorage.getItem("registroGarantia"));

console.log(datosGarantia)

const reclamoFinal = []    

function rendergarantias(){    
datosGarantia.forEach(reclamo => {
    const datosGarantia = document.createElement("div")
    datosGarantia.innerHTML= ` 
       
    <div class="row">        
        <div  class=" card text-white bg-danger mb-3" style="max-width: 18rem;">
            <div id="${reclamo.id} class="card-header">Garantia ${reclamo.id}</div>
                <div class="card-body">
                    <h5 class="card-title">PEDIDO : ${reclamo.pedido} </h5>
                    <p class="card-text">  CLIENTE: ${reclamo.nombre}</p>
                    <p class="card-text">  TELEFONO: ${reclamo.telefono}</p>
                    <p class="card-text">  PRODUCTO: ${reclamo.producto}</p>
                    <p class="card-text">  MARCA: ${reclamo.marca}</p>
                    <p class="card-text">  FALLA: ${reclamo.falla}</p>
                    
                    
                     <button type="button" class="btn btn-secondary">Eliminar</button>
 
                </div>     
                
                <form id="formResolucionGarantia" class="row g-3 w-75 p-3 p-3 mb-2 bg-danger text-white border border-danger" >
                    <select id="estado" class="form-select w-75 p-3 " " aria-label="Default select example">
                        <option selected>ESTADO </option>
                        <option value="RECIBIDO">RECIBIDO</option>
                        <option value="ENTREGADO">ENTREGADO</option>
                        <option value="NO ENTREGADO">NO ENTREGADO</option>
                    </select>
                    <select id="resolucion"class="form-select w-100 p-3 " " aria-label="Default select example">
                        <option selected>RESOLUCION </option>
                        <option value="CAMBIO POR GARANTIA">CAMBIO POR GARANTIA</option>
                        <option value="REPARADO">REPARADO</option>
                        <option value="EN REVISION">EN REVISION</option>
                        <option value="FUERA DE GARANTIA">FUERA DE GARANTIA</option>
                    </select>
        
                      
                <!--BOTON QUE GUARDA -->
                <div class="col-12">
                  <button class=" btn-guardar btn btn-primary" type="submit" id="${reclamo.id}" oninput="verificarFechaGarantia()">Guardar</button>
                </div>
              </form>
        </div>
    </div>
`
divReclamosGarantia.append(datosGarantia)});

let resolucionBtn = document.querySelectorAll(".btn-guardar")
console.log(resolucionBtn)
resolucionBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        cargarResolucion(e, datosGarantia);
        })
    })
}
rendergarantias()



function cargarResolucion (e, datosGarantia){
e.preventDefault()
//console.log(e.target.id)
    //console.log(e)
   // console.log(datos)
    const id = e.target.id
    const reclamo = datosGarantia.find (rec => rec.id===id)
    console.log(reclamo)

    let estado = document.getElementById("estado").value
    console.log(estado)
    let resolucion = document.getElementById("resolucion").value
    console.log(resolucion)

    reclamo.estado = estado.value
    reclamo.resolucion = resolucion.value

    console.log(reclamo)


    estado.value=""
    resolucion.value=""
    //resolucionModificada = [estado,resolucion] 
   // resolucionModificada.concat(datos)

}
//-----------------------------------------FIN REGISTRO GARANTIA--------------------------------------------------------
//--------------------------------INICIO SECCION DE CAMBIO -----------------------------------------------
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
console.log(reclamoCambio)

const cambio1 = new reclamoCambio(1+"C",111111,"Sarah Ochoa",1126950698,"luly","st")
const cambio2 = new reclamoCambio(2+"C",111111,"Isa Molina",1126950698,"joe 3","st")

const registroCambio= [cambio1,cambio2]

console.log(registroCambio)

//DOM
let formCambio = document.getElementById("form")

let divReclamosCambio = document.getElementById ("reclamos")
let btnGuardarCambio = document.getElementById("guardarCambioBtn")


function verCambios(array){

   divReclamosCambio.innerHTML = ""
    for (let reclamoCambio of array){ 
        let nuevoReclamo = document.createElement ("div") 
        nuevoReclamo.innerHTML = ` 

        <div class="row">  
            <div  class=" card text-white bg-danger mb-3" style="max-width: 18rem;">

                    <div id="${reclamoCambio.id} class="card-header">Cambio ${reclamoCambio.id}</div>
                        <div class="card-body">
                            <h5 class="card-title">${reclamoCambio.pedido} </h5>
                            <p class="card-text">  ${reclamoCambio.nombre}</p>
                            <p class="card-text">  ${reclamoCambio.telefono}</p>
                            <p class="card-text">  ${reclamoCambio.producto}</p>
                            <p class="card-text">  ${reclamoCambio.marca}</p>
                            <button type="button" class="btn btn-secondary">Eliminar</button>
                        </div>

            </div>>
    
        </div>
      `
        divReclamosCambio.appendChild(nuevoReclamo)

    }

}


function cargarCambio(array) {
    let inputPedido =  document.getElementById("pedidoInput").value
    console.log(inputPedido)
    let inputNombre = document.getElementById("clienteInput").value
    let inputTelefono = document.getElementById("telefonoInput").value
    let inputProducto = document.getElementById("productoInput").value
    let inputMarca = document.getElementById("marcaInput").value
    let reclamoCreado = new  reclamoCambio (array.length+1+"C", inputPedido,inputNombre,inputTelefono,inputProducto,inputMarca)
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
formCambio.addEventListener("submit",(e) => {
    e.preventDefault()
    cargarCambio(registroCambio)
})


let btnVerificarFechaCambio = document.getElementById("verificarFechaBtn")
btnVerificarFechaCambio.addEventListener("click", (verificarFechaCambio))

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

const datosCambio = JSON.parse(localStorage.getItem("registroCambio"));

console.log(datosCambio)

//-----------------------------------------FIN SECCION CAMBIO--------------------------------------------------------
//--------------------------------INICIO REGISTRO DE CAMBIO -----------------------------------------------

function renderCambios(){    
    datosCambio.forEach(reclamoCambio => {
        const datosCambio = document.createElement("div")
        datosCambio.innerHTML= ` 
           
        <div class="row">        
            <div  class=" card text-white bg-danger mb-3" style="max-width: 18rem;">
                <div id="${reclamoCambio.id} class="card-header">Garantia ${reclamoCambio.id}</div>
                    <div class="card-body">
                        <h5 class="card-title">PEDIDO : ${reclamoCambio.pedido} </h5>
                        <p class="card-text">  CLIENTE: ${reclamoCambio.nombre}</p>
                        <p class="card-text">  TELEFONO: ${reclamoCambio.telefono}</p>
                        <p class="card-text">  PRODUCTO: ${reclamoCambio.producto}</p>
                        <p class="card-text">  MARCA: ${reclamoCambio.marca}</p>
                        
                        
                         <button type="button" class="btn btn-secondary">Eliminar</button>
     
                    </div>     
                          
            </div>
        </div>
    `
    divReclamosCambio.append(datosCambio)})
    

}

renderCambios()
//--------------------------------FIN REGISTRO DE CAMBIO -----------------------------------------------
//--------------------------------INICIO SECCION DE DEVOLUCION -----------------------------------------------
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
let formDevolucion = document.getElementById("form")

let divReclamosDevolucion = document.getElementById ("reclamo")
//let btnGuardarCambio = document.getElementById("guardarCambioBtn")
let buscador = document.getElementById("buscador")
let btnVerCatalogo = document.getElementById("verDevoluciones")


function verDevoluciones(array){

   divReclamosDevolucion.innerHTML = ""
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
        divReclamosDevolucion.appendChild(nuevoReclamo)

    }

}


function cargarDevolucion(array) {
    let inputPedido =  document.getElementById("pedidoInput").value
    console.log(inputPedido)
    let inputNombre = document.getElementById("clienteInput").value
    let inputTelefono = document.getElementById("telefonoInput").value
    let inputProducto = document.getElementById("productoInput").value
    let inputMarca = document.getElementById("marcaInput").value
    let reclamoCreado = new  reclamoDevolucion (array.length+1+"D", inputPedido,inputNombre,inputTelefono,inputProducto,inputMarca)
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
formDevolucion.addEventListener("submit",(e) => {
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
//--------------------------------FIN SECCION DE DEVOLUCION -----------------------------------------------
//--------------------------------INICIO REGISTRO DE DEVOLUCION -----------------------------------------------
const datosDevolucion = JSON.parse(localStorage.getItem("registroDevolucion"));

console.log(datosDevolucion)

  


function renderDevolucion(){    
    datosDevolucion.forEach(reclamoDevolucion => {
        const datosDevolucion = document.createElement("div")
        datosDevolucion.innerHTML= ` 
           
        <div class="row">        
            <div  class=" card text-white bg-danger mb-3" style="max-width: 18rem;">
                <div id="${reclamoDevolucion.id} class="card-header">Devolución ${reclamoDevolucion.id}</div>
                    <div class="card-body">
                        <h5 class="card-title">PEDIDO : ${reclamoDevolucion.pedido} </h5>
                        <p class="card-text">  CLIENTE: ${reclamoDevolucion.nombre}</p>
                        <p class="card-text">  TELEFONO: ${reclamoDevolucion.telefono}</p>
                        <p class="card-text">  PRODUCTO: ${reclamoDevolucion.producto}</p>
                        <p class="card-text">  MARCA: ${reclamoDevolucion.marca}</p>
                        
                        
                         <button type="button" class="btn btn-secondary">Eliminar</button>
     
                    </div>     
                          
            </div>
        </div>
    `
    divReclamosDevolucion.append(datosDevolucion)})
    

}

renderDevolucion()
//--------------------------------FIN REGISTRO DE DEVOLUCION -----------------------------------------------
