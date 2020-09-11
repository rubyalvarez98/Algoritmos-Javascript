// Leer tres números y decir cuál de ellos es el que tiene el valor intermedio

let num1 = 7;
let num2 = 9;
let num3 = 12;

if((num1 < num2 && num1 > num3) || (num1>num2 && num1<num3)){
    console.log(`El numero intermedio es ${num1}`);

}else if((num2 > num1 && num2 < num3) ||(num2 <num1 && num2 > num3)){
    console.log(`El numero intermedio es ${num2}`);
}else{
    console.log(`El numero intermedio es ${num3}`); 
}
