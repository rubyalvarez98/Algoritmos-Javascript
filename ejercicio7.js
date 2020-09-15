//Leer dos números enteros, restar el menor del mayor y mostrar el resultado

function numeros(num1,num2) {

    if (num1 > num2) {
         const resultado = num1 -num2;
        
    } else {
        resultado = num2 - num1;
    }
    return console.log(`El resultado es: ${resultado}`);
}
numeros(6,9)