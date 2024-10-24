let a =parseInt(prompt("Ingrese el numero 1")) 
let b =parseInt(prompt("Ingrese el numero 2")) 
let c =parseInt(prompt("Ingrese el numero 3")) 

if(a > b && a > c){
    console.log("El numero (",a,") es mayor ")
    console.log("Numeros ordenados de mayor a menor", a," ",  b," ", c)
 
  
}
else{
    if(b > a && b > c){
        console.log("El numero (",b,") es mayor ")
        console.log("Numeros ordenados de mayor a menor", b," ",  a," ", c)

    }
    else{
        console.log("Numeros ordenados de mayor a menor", c," ",  b," ", a)
    
        
    }
}



