var nombre ="carlos";
console.log(nombre);

var numero = 100;
console.log(numero)

var objeto = {
    nombre: "pablo",
    apellido: "perez",
    telefono: "229488686"
};
console.log(objeto);

var bandera = true;
console.log(bandera);

function miFuncion(){} 
console.log(miFuncion);

var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

class persona{
    constructor(nombre, apellido){
       this.nombre = nombre;
       this.apellido = apellido;
    }
}

console.log(persona)

var x;
console.log(x);

var y = null;
console.log(y);

//RECOMENDABLE USAR TIPO LET
let nombre = "pablo";

// variable tipo const no se le puede mandar otro valor
const apellido = "yepez";