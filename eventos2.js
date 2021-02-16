'use strict'

const element = document.getElementById('guardar');
element.addEventListener('click', showLoad); 
function showLoad () {
    alert('Se ha guardado')
};

//nombre fondo cambia de color

const colorear = document.getElementById ('colorear');
colorear.addEventListener('focus', showFocus); 
console.log('ejecuta', colorear)
function showFocus (){
    colorear.style.background ='red'
}

//quitamos el foco

const descolorear = document.getElementById('colorear');
descolorear.addEventListener('focusout', showSincolor);
function showSincolor () {
    colorear.style.background ='white'
};

//vocal consonante: 
const letras = document.getElementById('vocal');
letras.addEventListener('keypress', showVocal);

function showVocal () {
    console.log(event)
    if (event.key === 'a' || event.key ==='e' || event.key ==='i' || event.key ==='o' || event.key ==='u'|| event.key === 'A' || event.key ==='E' || event.key ==='I' || event.key ==='O' || event.key ==='U') {    //el event me lleva a las propiedades del listener keypress
        letras.style.color = 'red'
    } else { 
        letras.style.color = 'blue'
    };
}; 


