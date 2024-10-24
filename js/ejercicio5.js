let num1 = parseInt(prompt("ingrese el numero 1"))
let num2 = parseInt(prompt("ingrese el numero 2"))
let num3 = parseInt(prompt("ingrese el numero 3"))

if (num1 > num2 && num1 > num3) {
    console.log("El numero mayor es:", num1)
}
else {
    if (num2 > num3 && num2 > num1) {
        console.log("El numero mayor es:", num2)
    }
    else {
        console.log("El numero mayor es:", num3)
    }
}
if (num1 < num2 && num1 < num3) {
    console.log("El numero menor es:", num1)
}
else {
    if (num2 < num3 && num2 < num1) {
        console.log("El numero menor es:", num2)
    }
    else {
        console.log("El numero menor es:", num3)
    }
}

if (num1 == num2 && num1 == num3) {
    console.log("El numero:(", num1, ") y el(", num2, ")son iguales")
}
else {
    if (num2 == num3 && num2 == num1) {
        console.log("El numero:(", num2, ") y el(", num3, ")son iguales")
    }
    else {
        console.log("El numero:(", num3, ") y el(", num1, ")son iguales")
    }
}
if (num1 !== num2 && num1 !== num3) {
    console.log("los numeros:(", num1, ")(", num2, ")son diferentes")
}
else {
    if (num2 !== num3 && num2 !== num1) {
        console.log("los numeros:(", num2, ") (", num3, ")son diferentes")
    }
    else {
        console.log("los numeros:(", num3, ") (", num1, ")son diferentes")
    }
}

