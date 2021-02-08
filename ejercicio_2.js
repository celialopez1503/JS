'use strict'
///objeto es un objeto dentro de un objeto con propiedades, posteriormente: hacemos modificaciones:

let persona = {
    edad : 25,
    nombre : 'pepe',
    direccion: {
        calle: 'calle leganes',
        piso: 3,
        provincia: 'madrid'
    },
};
console.log('persona', persona);

persona.nombre = 'juan'
persona.direccion.calle = 'calle getafe'

console.log('persona', persona);

//otra forma:
let persona2 = {};            //declaro el primer objeto
persona2.nombre = 'Celia';
persona2.direccion2 = {}            // declaro el segundo objeto dentro del primero
persona2.direccion2.calle = 'collado villalba'


//crear una array de objetos: 

let usuario1 = {
    puesto: 'a',
    categoria: 2,
    salario: 10
    
};

let usuario2 = {
    puesto: 'b',
    categoria: 3,
    salario: 100

};

let usuarios = [usuario1, usuario2];      ///es importante que vaya sin comillas porque es una variable y no un valor. 
console.log('usuarios', usuarios);

usuarios[0].puesto = 'c';
console.log(usuarios)







