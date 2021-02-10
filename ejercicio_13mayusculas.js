'use strict'

const topics = ['JavaScript', 'variables', 'funciones', 'condicionales', 'bucles'];



const topicsMayusculas = topics.map(function transformacion (variable){       //map no modifica el array inicial
    return variable.toUpperCase ()
});
topicsMayusculas.reverse();
console.log(topicsMayusculas);


//FUNCIÓN FLECHA:

const topicsMayusculas =topics.map(variable => variable.toLocaleUpperCase);    

// FUNCIÓN FILTER: la funcion filter me devuelve un array ya de por si 

const topicsMayusculas = topics.filter( variable => variable.length > 5);  // filtro de fecha

const topicsMayusculas2 = topics.filter(function(palabra){         // filtro de funcion
    return palabra.lenght > 6; 
});





