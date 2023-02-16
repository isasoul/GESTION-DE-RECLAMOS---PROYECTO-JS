let divReclamos = document.getElementById("reclamo")
let  formResolucion = document.getElementById("formResolucion")
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
                        
                        
     
                    </div>     
                          
            </div>
        </div>
    `
    divReclamos.append(datosDevolucion)})
    

}

renderDevolucion()