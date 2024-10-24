let num1 = parseInt(prompt("Ingrese el primer numero"))
let num2 = parseInt(prompt("Ingrese el segundo numero"))
let num3 = parseInt(prompt("Ingrese el tercer numero"))

if(num1 % num2 == 0 && num1 % num3 == 0){
    console.log("El numero(",num1,"es divisible con el",num2,")")
}
else{
    if(num2 % num1 == 0 && num2 % num3 == 0){
        console.log("El numero(",num2,"es divisible con el",num3,")")
    }
    else{
        console.log("El numero(",num3,"es divisible con el",num1,")")
    }
}