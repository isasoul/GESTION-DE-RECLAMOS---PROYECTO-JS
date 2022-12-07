// SECCION DE RECLAMOS
class reclamo {
    constructor(id, pedido, nombre, telefono, producto, marca){
        this.id = id,
        this.pedido = pedido,
        this.nombre = nombre,
        this.telefono = telefono,
        this.producto = producto,
        this.marca = marca
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
        NOMBRE DE LA MARCA:   ${this.falla}` )
    }
}

const reclamo1= new reclamo(1,111111,"Sarah Ochoa",1126950698,"luly","otra marca")
const reclamo2= new reclamo(2,111111,"Isa Molina",1126950698,"joe 3","otra marca")
const registroGarantia = [reclamo1,reclamo2]


function garantia(){
    let fecha1 = new Date(prompt("ingrese la fecha del dia en formato mm/dd/aa")) //fecha del dia
    let fecha2 = new Date(prompt("ingrese la fecha en que recibió el producto o lo compró presencial en formato mm/dd/aa")) //fecha nueva
    let milisegundosMes= 4.345*7*24*60*60*1000
    let milisegundosTranscurridos = Math.abs(fecha1.getTime()- fecha2.getTime())
    let mesesTranscurridos = Math.round(milisegundosTranscurridos/milisegundosMes)
    console.log(`la cantidad de meses transcurridos desde la compra es: ${mesesTranscurridos}`)


    function nuevoReclamo(array){
        if( mesesTranscurridos <= 6){
        let numeroPedido = parseInt(prompt("Ingrese el número de pedido: "))
        let nombreIngresado = prompt ("Ingrese el nombre del cliente: ")
        let numeroTelefono = parseInt(prompt("Ingrese el número de telefono del cliente: "))
        let nombreProducto = prompt(" Ingrese el nombre del producto: ") 
        let nombreMarca = prompt(" Ingrese el nombre de la marca: ")
        let reclamoCreado = new reclamo (array.length+1,numeroPedido,nombreIngresado,numeroTelefono,nombreProducto,nombreMarca)
        array.push(reclamoCreado)
        console.log(array)
    }else{
        alert("El producto se encuentra fuera del tiempo de garantía")
    } }
    nuevoReclamo(registroGarantia)
     }
     console.log(registroGarantia)


function verGarantias(array){
    for(let reclamo of array){
        console.log (`DATOS DE LA SOLICITUD DE GARANTIA:
        Reclamo:  ${reclamo.id}
        Pedido:   ${reclamo.pedido}
        Cliente:  ${reclamo.nombre}
        Teléfono: ${reclamo.telefono}
        Producto: ${reclamo.producto}
        Marca:    ${reclamo.marca} `)
    }
}



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

//DOM 
let divGarantias = document.getElementById ("garantias")
let btnGuardarGarantia = document.getElementById("guardarGarantiaBtn")
let buscador = document.getElementById("buscador")
let btnVerCatalogo = document.getElementById("verGarantias")
