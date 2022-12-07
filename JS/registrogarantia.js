function verGarantias(array){
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
}