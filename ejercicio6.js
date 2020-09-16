/*  En un almacén se hace un 20% de descuento a los clientes cuya compra 
supere los $1,000 ¿cuál será la cantidad que pagará una persona por su compra*/

function compra(valorCompra) {

    if (valorCompra > 1000) {
       let descuento = valorCompra * 0.2;
      return `El valor de la compra con descuesto es: ${valorCompra - descuento}`;
    }else {
        
        return `El valor de la compra es: ${valorCompra}`;
    }
    
}
 let precioFinal = compra(1200);
 console.log(precioFinal);