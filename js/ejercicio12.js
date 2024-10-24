let ventasMenores2000 = 0;
let ventasMayores2000 = 0;
let comisionTotal = 0;
let precio1 = parseFloat(prompt("Ingrese precio de venta 1"));
let precio2 = parseFloat(prompt("Ingrese precio de venta 2"));
let precio3 = parseFloat(prompt("Ingrese precio de venta 3"));
let precio50 = parseFloat(prompt("Ingrese precio de venta 50"));

if (precio1 < 2000) {
    ventasMenores2000++
    comisionTotal += precio1 * 0.03
} 
else {
    ventasMayores2000++
    comisionTotal += precio1 * 0.05
}

if (precio2 < 2000) {
    ventasMenores2000++
    comisionTotal += precio2 * 0.03
} 
else {
    ventasMayores2000++
    comisionTotal += precio2 * 0.05
}

if (precio50 < 2000) {
    ventasMenores2000++
    comisionTotal += precio50 * 0.03
} 
else {
    ventasMayores2000++
    comisionTotal += precio50 * 0.05
}

console.log("Ventas menores de 2000:",ventasMenores2000)
console.log("Ventas mayores o iguales a 2000:", ventasMayores2000);
console.log("Comisión total:" ,comisionTotal);