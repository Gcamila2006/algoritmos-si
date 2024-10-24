categorias = {
    A: 5000,
    B: 3500,
    C: 2000
}
    
nombre1 = prompt("Ingrese nombre del empleado 1");
    categoria1 = prompt("Ingrese categoría del empleado 1 (A, B, C)");
    sueldo1 = categorias[categoria1] || 0;
    
nombre2 = prompt("Ingrese nombre del empleado 2");
    categoria2 = prompt("Ingrese categoría del empleado 2 (A, B, C)");
    sueldo2 = categorias[categoria2] || 0;
    
nombre3 = prompt("Ingrese nombre del empleado 3");
    categoria3 = prompt("Ingrese categoría del empleado 3 (A, B, C)");
    sueldo3 = categorias[categoria3] || 0;
    
nombre4 = prompt("Ingrese nombre del empleado 4");
    categoria4 = prompt("Ingrese categoría del empleado 4 (A, B, C)");
    sueldo4 = categorias[categoria4] || 0;
    
nombre5 = prompt("Ingrese nombre del empleado 5");
    categoria5 = prompt("Ingrese categoría del empleado 5 (A, B, C)");
    sueldo5 = categorias[categoria5] || 0;
    
    console.log("Sueldos de empleados:");
    console.log("Nombre: " + nombre1 + ", Categoría: " + categoria1 + ", Sueldo: $" + sueldo1);
    console.log("Nombre: " + nombre2 + ", Categoría: " + categoria2 + ", Sueldo: $" + sueldo2);
    console.log("Nombre: " + nombre3 + ", Categoría: " + categoria3 + ", Sueldo: $" + sueldo3);
    console.log("Nombre: " + nombre4 + ", Categoría: " + categoria4 + ", Sueldo: $" + sueldo4);
    console.log("Nombre: " + nombre5 + ", Categoría: " + categoria5 + ", Sueldo: $" + sueldo5);