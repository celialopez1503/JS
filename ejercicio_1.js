'use strict'

alert(' mi mensaje de alerta');

const country = "españa"
console.log('mensaje de console.log', country)

//calculo del area del paralelogramo//

const volumen = 16*23*13;
console.log('volumen', volumen);

var edad = prompt('Ingrese su apellido?');
console.log(edad);

//Creación de objetos//

let Celia = {
    dia: 15,
    mes: 'marzo'
};

console.log('mi cumpleaños es el '+ Celia.dia + 'de ' + Celia.mes);

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre']
console.log(meses[2]);

const nombre = "Celia"
const apellido = "Lopez"

console.log(`hola ${nombre} ${apellido}`);

//Ejercicio de area con variables//

let lado = 13
let ancho = 16
let largo = 23

let area = lado* ancho* largo;
console.log('area', area);

// usuario pide datos//

lado = prompt('igrese el valor del lado');
ancho = prompt ('ingrese el valor del ancho');
largo = prompt ('ingrese el valor del largo');

console.log('el area de su lado es '+ lado* ancho* largo);

// para poner en el script

document.write(lado);


//array

const data = ['hola', 2, 5, 'adios'];
console.log(data[2]);
console.log(data[1]+ [2]);






