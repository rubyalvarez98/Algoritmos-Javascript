//Leer dos números enteros, restar el menor del mayor y mostrar el resultado

function resta(num1,num2) {
    
    
    if (num1 > num2) {
         return `El resultado es: ${num1 - num2}`;
        
    } else 
        return `El resultado es: ${num2-num1}`;
    
    }
    
let resultado = resta(6,9);
console.log(resultado);