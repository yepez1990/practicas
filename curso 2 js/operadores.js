
let a = 3, b = 2;
let z = a + b;
console.log("resultado de la suma es " + z); 

z  = a -b;
console.log("resultado de la resta es " + z);

z = a * b;
console.log("resultado de la multiplicacion es " + z);

z = a / b;
console.log("resultado de la division es " + z);

z = a % b;
console.log("el resultado del residuo es " + z);

z = a ** b;
console.log("resultado de exponente es " + z)

// pre invremento 
z = a++;

// postincremento
z = ++a;

// pre decremento
z = a--;

//post decremento
z = --a;

// numero par
par  = 10;
if (par % 2 == 0){
    console.log("es numero par");
} else{
    console.log("numero inpar");
}

let edad = 20, adulto = 18;

if(edad>=adulto){
    console.log("es mayor de edad");
}else{
    console.log("es menor de edad");
}

//operadores logicos && AND , || OR

// ejemplo de AND
let valor1  = 5;
let valMin = 0, valMax = 10;

if( valor1 >= valMin && valor1 <= valMax){
    console.log("dentro del rangp")
}else{
    console.log("fuera del rango")
}


//ejemplo de OR
let vacaciones = false, diaDescanso = false;
if(!vacaciones || !diaDescanso){
    console.log("puedo salir")
}else {
    console.log("no puedo salir")
}


//ejemplo ternario
let resultado = (3>2)? "verdarero" : "falso";
console.log(resultado);

//convertir string a numero
let miNumero="10"
edad = Number(miNumero);

console.log(edad >= 18 ? "es mayor de edad": "es menor de edad");

resultado = (edad >= 18) ? "es mayor" : "es menor";
console.log(resultado);

 