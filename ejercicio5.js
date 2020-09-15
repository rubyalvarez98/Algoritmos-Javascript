//Leer tres calificaciones de un alumno y determinar su promedio

function notas(nota1,nota2,nota3){
    const promedio = (Math.round(nota1 + nota2 + nota3)/3);
    return console.log (`El promedio final es ${promedio}`);
}
notas(3.5,4.0,3.9)

