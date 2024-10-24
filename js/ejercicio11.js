let longitud = parseFloat(prompt("Ingrese longitud de la varilla (cm)"));
let diametro = parseFloat(prompt("Ingrese diámetro de la varilla (cm)"));


if (longitud > 7.5 && longitud <= 9 &&
    diametro >= 0.5 && diametro <= 1.3) 
{

let densidad = 3.5; 
let masa = diametro * longitud * densidad;

if (masa <= 5.8) {
    console.log("La varilla es aceptada");
} 
else {
    console.log("La varilla es rechazada la Masa excede los 5.8 gr");
}
} 
else {
    console.log("La varilla es rechazada. No cumple con los criterios de longitud o diámetro");
}