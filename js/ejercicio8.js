let num1 = parseInt(prompt("Ingrese número 1"));
let num2 = parseInt(prompt("Ingrese número 2"));
let num3 = parseInt(prompt("Ingrese número 3"));

if (num1 < num2 && num1 < num3) {
    menor = num1
if (num2 < num3) {
    medio = num2
    mayor = num3
} 
else {
    medio = num3
    mayor = num2
}
} 
else if (num2 < num1 && num2 < num3) {
    menor = num2;
if (num1 < num3) {
    medio = num1
    mayor = num3
} 
else {
    medio = num3
    mayor = num1
}
} 
else {
    menor = num3;
if (num1 < num2) {
    medio = num1
    mayor = num2
} 
else {
    medio = num2;
    mayor = num1;
}
}

console.log("El numero del medio es:", medio);