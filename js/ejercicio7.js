let nombre = prompt("Ingrese su nombre")
let edad = parseInt(prompt("Ingrese su edad"))
let sexo = prompt("Ingrese su sexo (hombre/mujer)")
let estado = prompt("Ingrese su estado civil (casado/soltero)")

if (sexo == "hombre" && edad > 40 && estado == "casado"){
     console.log("Su nombre es:", nombre)
}
else{
    if(sexo == "mujer" && edad >50 && estado == "soltero"){
        console.log("Su nombre es:", nombre)
    }
    else{
        console.log("No cumple las condiciones")
    }
}