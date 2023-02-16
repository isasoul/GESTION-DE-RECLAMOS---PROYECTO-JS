let divReclamos = document.getElementById("reclamos")
let  formResolucion = document.getElementById("formResolucion")
const datos = JSON.parse(localStorage.getItem("registroCambio"));

console.log(datos)




function renderCambios(){    
    datos.forEach(reclamoCambio => {
        const datos = document.createElement("div")
        datos.innerHTML= ` 
           
        <div class="row">        
            <div  class=" card text-white bg-danger mb-3" style="max-width: 18rem;">
                <div id="${reclamoCambio.id} class="card-header">Garantia ${reclamoCambio.id}</div>
                    <div class="card-body">
                        <h5 class="card-title">PEDIDO : ${reclamoCambio.pedido} </h5>
                        <p class="card-text">  CLIENTE: ${reclamoCambio.nombre}</p>
                        <p class="card-text">  TELEFONO: ${reclamoCambio.telefono}</p>
                        <p class="card-text">  PRODUCTO: ${reclamoCambio.producto}</p>
                        <p class="card-text">  MARCA: ${reclamoCambio.marca}</p>
                        
                        
     
                    </div>     
                          
            </div>
        </div>
    `
    divReclamos.append(datos)})
    

}

renderCambios()
