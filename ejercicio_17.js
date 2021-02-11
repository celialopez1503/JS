'use strick'

// A partir de un array con todos los meses del año escritos en minusculas, cree otro donde solo esten los meses que tienen más de 7 letras y haz que esten escritos en mayusculas. 

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const mesesLargos = meses.filter (month => month.length >7);    //filtramos por lo que son mayores, me devuelve un array


const mesesMayusuculas = mesesLargos.map(function(mayuscula){
    return mayuscula.toUpperCase();
});

console. log(mesesMayusuculas);


// MÉTODO CONCATENAR: 

const concatenacionMet = meses.filter (function(item){
    return item.lenght >7
}).map(function(element){
    return element.toUpperCase();
});


