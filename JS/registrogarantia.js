let divReclamos = document.getElementById("reclamos")
const datos = JSON.parse(localStorage.getItem("registroGarantia"));

console.log(datos)

datos.forEach(reclamo => {
    const datos = document.createElement("div")
    datos.innerHTML= ` 
       
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
                    <button type="button" class="btn btn-light">Editar</button>
                </div>
        </div>>
        
  
    </div>


`
divReclamos.append(datos)});



