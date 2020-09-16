/*Leer dos números si el primero es mayor mostrar la Resta de los dos números,
por otro lado si el segundo es mayor mostrar la suma de ambos*/

function sumaOresta(num1,num2) {
    
             if (num1 > num2) {
                 return `El resultado de la resta es:${num1 - num2} `;
             } 
                 return `El resultado de la suma es:${num2 + num1} `;
         }
 var operacion = sumaOresta(3,5);
 console.log(operacion);