'use strict'

const primeraCadena = [2, 4, 6, 8, 10]
const resultadoCadena = primeraCadena.map (function(sustituyo){        ///sustituyo es el parametro de la función. el map lo que hace es coger un numero de la array y lo sustituye por sustituyo que luego pone que se resta uno. 
    return (sustituyo-1)
});

console.log(resultadoCadena);




