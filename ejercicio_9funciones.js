'use strict'

///Funciones básicas para una cadena de texto:

let cadena = 'hola';
const numeroLetras = cadena.length
alert (numeroLetras);

/// concat concatena palabras:

const mensaje = cadena.concat ('hasta luego');

alert (mensaje);

///Transforma los caracteres en mayusculas

const mayusculas = cadena.toUpperCase();
alert(mayusculas);

///Sacar posicion de la cadena de texto
let letra = cadena.charAt(0);
alert(letra);

//substring (inicio, fin); extrae una proporcion de la cadena de texto

//Split(separador) convierte una cadena de texto en array

let cadenanueva = 'hola, soy una cadena';
var array = cadenanueva.split(' ');
alert(array);



