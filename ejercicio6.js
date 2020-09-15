/*  En un almacén se hace un 20% de descuento a los clientes cuya compra 
supere los $1,000 ¿cuál será la cantidad que pagará una persona por su compra*/

function compra(valorCompra) {

    if (valorCompra > 1000) {
       const descuento = valorCompra * 0.2;
       const precioFinal = valorCompra - descuento;
       return console.log(`El valor de la compra despues del descuento es: ${precioFinal}`);
    }else {
        descuento = 0;
        precioFinal = valorCompra - descuento;
    return console.log(`El valor de la compra despues del descuento es: ${precioFinal}`);
    }
    
}
compra(1200)