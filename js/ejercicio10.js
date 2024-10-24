let nota1 = parseFloat(prompt("Ingrese la nota 1 "))
let nota2 = parseFloat(prompt("Ingrese la nota 2 "))
let nota3 = parseFloat(prompt("Ingrese la nota 3 "))

if(nota1 >= nota2 && nota1 >= nota3 ){
    mayor = nota1;
    if (nota2 >= nota3) {
      mediana = nota2;
      menor = nota3;
    } else {
      mediana = nota3;
      menor = nota2;
    }
  } else if (nota2 >= nota1 && nota2 >= nota3) {
    mayor = nota2;
    if (nota1 >= nota3) {
      mediana = nota1;
      menor = nota3;
    } else {
      mediana = nota3;
      menor = nota1;
    }
  } else {
    mayor = nota3;
    if (nota1 >= nota2) {
      mediana = nota1;
      menor = nota2;
    } else {
      mediana = nota2;
      menor = nota1;
    }
  }
  let notaFinal = (mayor + mediana) / 2
  console.log("La nota final es:(",notaFinal,")")
