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
        NOMBRE DE LA FALLA:   ${this.falla}` )
    }
}

const reclamo1= new reclamo(1,111111,"Sarah Ochoa",1126950698,"luly","otra marca")
const reclamo2= new reclamo(2,111111,"Isa Molina",1126950698,"joe 3","otra marca")
const registroGarantia = [reclamo1,reclamo2]

//DOM 
let divGarantias = document.getElementById ("garantias")
let btnGuardarGarantia = document.getElementById("guardarGarantiaBtn")
let buscador = document.getElementById("buscador")
let btnVerCatalogo = document.getElementById("verGarantias")

function verGarantias(array){

    /*
    for(let reclamo of array){
        console.log (`DATOS DE LA SOLICITUD DE GARANTIA:
        Reclamo:  ${reclamo.id}
        Pedido:   ${reclamo.pedido}
        Cliente:  ${reclamo.nombre}
        Teléfono: ${reclamo.telefono}
        Producto: ${reclamo.producto}
        Marca:    ${reclamo.marca}
        Falla:    ${reclamo.falla}`)
    }
    */

   divGarantias.innerHTML =  ""
    for (let reclamo of array){
        let nuevoReclamo = document.createElement ("div")
        nuevoReclamo.innerHTML = `  <div id="$garantias"></div>
        <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
          <div class="card-header">Garantia</div>
          <div class="card-body">
            <h5 class="card-title">Pedido</h5>
            <p class="card-text">datos 
            </p>
            <button type="button" class="btn btn-secondary">Eliminar</button>
            <button type="button" class="btn btn-light">Editar</button>
          </div>
        </div>>`
    }

}