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
                    <h5 class="card-title">PEDIDO : ${reclamo.pedido} </h5>
                    <p class="card-text">  NOMBRE: CLIENTE ${reclamo.nombre}</p>
                    <p class="card-text">  TELEFONO: ${reclamo.telefono}</p>
                    <p class="card-text">  PRODUCTO: ${reclamo.producto}</p>
                    <p class="card-text">  MARCA: ${reclamo.marca}</p>
                    <p class="card-text">  FALLA: ${reclamo.falla}</p>
                    
                    
                     <button type="button" class="btn btn-secondary">Eliminar</button>
 
                </div>     
                
                <form id="form" class="row g-3 w-75 p-3 p-3 mb-2 bg-danger text-white border border-danger" >
                <select class="form-select w-75 p-3 " " aria-label="Default select example">
                    <option selected>ESTADO </option>
                    <option value="RECIBIDO">RECIBIDO</option>
                    <option value="ENTREGADO">ENTREGADO</option>
                    <option value="NO ENTREGADO">NO ENTREGADO</option>
                    </select>
                    <select class="form-select w-100 p-3 " " aria-label="Default select example">
                    <option selected>RESOLUCION </option>
                    <option value="CAMBIO POR GARANTIA">CAMBIO POR GARANTIA</option>
                    <option value="REPARADO">REPARADO</option>
                    <option value="EN REVISION">EN REVISION</option>
                    <option value="FUERA DE GARANTIA">FUERA DE GARANTIA</option>
                    </select>
        
                      
                <!--BOTON QUE GUARDA -->
                <div class="col-12">
                  <button class="btn btn-primary" type="submit" id="guardarGarantiaBtn">Guardar</button>
                </div>
              </form>

                


        </div>>
        
        
    </div>


`
divReclamos.append(datos)});



