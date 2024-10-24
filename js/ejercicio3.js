let salario = parseInt(prompt("Digite el sueldo del trabajador"))

if(salario < 300.000){
    precio_aumento= salario*1.15
    console.log("su sueldo con el 15% de aumento es:",precio_aumento)

}
else{
    console.log("su sueldo es", salario)
}