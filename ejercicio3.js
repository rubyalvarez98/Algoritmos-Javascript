/*Leer tres números y decir cuál es el de valor mayor, 
el de valor intermedio, y el de valor menor*/

function numero(a,b,c){

if(a>b && b<c){
     return console.log(`El orden de mayor a menor: ${a}, ${b}, ${c}`);

}else if(a>c && c>b){
   return console.log(`El orden de mayor a menor: ${a}, ${c}, ${b}`);

}else if(b>a && a>c){
   return console.log(`El orden de mayor a menor: ${b}, ${a}, ${c}`);

}else if(b>c && c>a){
    return console.log(`El orden de mayor a menor: ${b}, ${c}, ${a}`);

}else if(c>b && b>a){
   return console.log(`El orden de mayor a menor: ${c}, ${b}, ${a}`);

}else {
       return console.log(`El orden de mayor a menor: ${c}, ${a}, ${b}`);

}
}
numero(30,45,20)