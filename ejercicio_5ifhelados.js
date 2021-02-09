'use strict' 

var helado = prompt('elige un topping');
console.log(helado);



if (helado === 'sintopping') {
    alert(' ha elegido sintopping, el valor es 1.90');
} else if ( helado === 'oreo') {
    alert (' ha elegido oreo, su valor es 1 euro');
    console.log (1.90+1);
} else if ( helado === 'kitkat') {
    alert ('ha elegido kitkat, su valor es 1.5');
} else if (heado === 'brownie') {
    alert ('ha elegido brownie, el valor es 0.75 euros');
} else if( helado === 'lacasitos') {
    alert( 'ha elegido lacasitos, su valor es 0.95 euros');
} else if ( helado === '') { 
    alert ('no tenemos este topping, lo sentimos');
    console.log ('el precio del helado sin topping es 1.90 euros');
} else {
    console.log ('el precio del helado es')
}


