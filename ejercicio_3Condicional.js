'use strict'   /// ejecutar de arriba a abajo tiene mayor control de las variables y de la reasignación
let numero1 = 5;
const numero2 = 8;


if ( numero1 < numero2) {
    alert('numero1 no es mayor que numereo2');
};

if (numero2 >= 0) {
    alert ('numero2 es positivo');
};

if (numero1 < 0 || numero1 != 0) {
    alert ('el numero1 es negativo o distinto de cero');
};

if ( ++numero1 <= numero2) {
    alert ( 'Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que el numero2');
};

/// una única condicion:

let number1 = 5;
const number2 = 8;

if ((number1 < number2) && (number2 >= 0) && (number1 < 0 || number1 != 0) && (++number1 <= number2) ) {
    alert ( 'Se cumplen todas las condiciones');
};


