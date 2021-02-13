//Muestra por pantalla la siguiente información:
///Numero de enlaces de la página
///Direccion a la que enlaza el penultimo enlace
///Numero de enlaces del tercer párrafo
//Además pinta los resultados al final de pagina utilizanod innerHTML creando un nodo: 


'user strict'

//numero de enlace

const enlace = document.getElementsByTagName('a');
console.log (enlace.length);


//penultimo enlace

const penultimo = enlaces[enlaces.length -2];
console.log(penultimo.href);

//
const tercer = document.getElementById ('thirdparagraph');
console.log(tercer);

const enlacesTercer = tercer.getElementsByTagName ('a');
console.log(enlacesTercer.length);

const resultado = document.getElementById ('resultado');

resultado.innerHTML = enlacesTercer.length;


