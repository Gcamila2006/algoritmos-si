let notateorica = parseInt(prompt("Ingrese su nota teorica "))
let notapractica = parseInt(prompt("Ingrese su nota practica "))
let notatotal = parseInt(notapractica) + parseInt(notateorica)/2

if(notatotal >= 3 && notatotal <=5){
    console.log("Aprobo con una nota final de:", notatotal)
}
else{
    console.log("Desaprobo con una nota final de:", notatotal)
}