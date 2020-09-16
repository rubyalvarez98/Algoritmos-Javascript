//Leer tres calificaciones de un alumno y determinar su promedio

function notas(nota1,nota2,nota3){
    
    return `El promedio final es ${((nota1 + nota2 + nota3)/3).toFixed(1)}`;
}

let promedio = notas(3.5,4.0,3.9);
console.log(promedio);

