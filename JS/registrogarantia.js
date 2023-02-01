let divReclamos = document.getElementById("reclamos")
let  formResolucion = document.getElementById("formResolucion")
const datos = JSON.parse(localStorage.getItem("registroGarantia"));

console.log(datos)

const reclamoFinal = []    

function rendergarantias(){    
datos.forEach(reclamo => {
    const datos = document.createElement("div")
    datos.innerHTML= ` 
       
    <div class="row">        
        <div  class=" card text-white bg-danger mb-3" style="max-width: 18rem;">
            <div id="${reclamo.id} class="card-header">Garantia ${reclamo.id}</div>
                <div class="card-body">
                    <h5 class="card-title">PEDIDO : ${reclamo.pedido} </h5>
                    <p class="card-text">  NOMBRE CLIENTE: ${reclamo.nombre}</p>
                    <p class="card-text">  TELEFONO: ${reclamo.telefono}</p>
                    <p class="card-text">  PRODUCTO: ${reclamo.producto}</p>
                    <p class="card-text">  MARCA: ${reclamo.marca}</p>
                    <p class="card-text">  FALLA: ${reclamo.falla}</p>
                    
                    
                     <button type="button" class="btn btn-secondary">Eliminar</button>
 
                </div>     
                
                <form id="formResolucion" class="row g-3 w-75 p-3 p-3 mb-2 bg-danger text-white border border-danger" >
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
                  <button class=" btn-guardar btn btn-primary" type="submit" id="${reclamo.id} oninput = "cargarResolucion()">Guardar</button>
                </div>
              </form>
        </div>
    </div>
`
divReclamos.append(datos)});

let resolucionBtn = document.querySelectorAll(".btn-guardar")
console.log(resolucionBtn)
resolucionBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        cargarResolucion(e, datos);
        })
    })
}
rendergarantias()



function cargarResolucion (e, datos){
e.preventDefault()
//console.log(e.target.id)
    //console.log(e)
   // console.log(datos)
    const id = e.target.id
    const reclamo = datos.find (rec => rec.id===id)
    console.log(reclamo)

    let estado = document.getElementById("estado").value
    console.log(estado)
    let resolucion = document.getElementById("resolucion").value
    console.log(resolucion)

    reclamo.estado = estado
    reclamo.resolucion = resolucion

    console.log(reclamo)

    const reclamoFinal = [estado,resolucion] 
    reclamoFinal.push(...datos)
  
    //localStorage.setItem("reclamoFinal", JSON.stringify(reclamo));
    estado.value=""
    resolucion.value=""
    //resolucionModificada = [estado,resolucion] 
   // resolucionModificada.concat(datos)

}










