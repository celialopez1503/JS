'use strict'

//introduce una frase y decide si es mayusculas o minusculas: 


let frase = prompt('escriba una frase');

const controlMayusculas = frase.toUpperCase();
const controlMinusculas = frase.toLowerCase();

if (frase === controlMayusculas){
    alert('la frase esta en mayusuculas');
} else if ( frase === controlMinusculas){
    alert('la frase esta en minusculas');
} else {
    alert ('la frase esta escriba en ambas');
};


//repite el proceso creando una función: 
const mensaje = ('hola')

function checkLetter (mensaje) {                            /// Tiene que estar todo dentro de la función: 
    const controlMayusculas = frase.toUpperCase();
    const controlMinusculas = frase.toLowerCase();
    if (frase === controlMayusculas){
       return(alert('la frase esta en mayusuculas'));
    } else if ( frase === controlMinusculas){
       return( alert('la frase esta en minusculas'));
    } else {
       return( alert ('la frase esta escriba en ambas'));
    };  
};

checkLetter (mensaje);







