/*Leer tres números y decir cuál es el de valor mayor, 
el de valor intermedio, y el de valor menor*/

const a = 20;
const b = 45;
const c = 30;

if(a>b && b<c){
    console.log(`Orden de mayor a menor: ${a}, ${b}, ${c}`);

}else if(a>c && c>b){
    console.log(`Orden de mayor a menor: ${a}, ${c}, ${b}`);

}else if(b>a && a>c){
    console.log(`Orden de mayor a menor: ${b}, ${a}, ${c}`);

}else if(b>c && c>a){
    console.log(`Orden de mayor a menor: ${b}, ${c}, ${a}`);

}else if(c>b && b>a){
    console.log(`Orden de mayor a menor: ${c}, ${b}, ${a}`);

}else {
        console.log(`Orden de mayor a menor: ${c}, ${a}, ${b}`);

}