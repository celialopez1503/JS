'use strict'

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']; 

let dni = prompt('escriba su dni')

if (dni < 0 || dni > 99999999){
    alert('el numero del dni es incorrecto');
} else {
  console.log(letras[dni%23])
  
};


