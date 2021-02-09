'use strict'

let diametro = prompt('introduce el diametro de una rueda');
let grosor = prompt ('introduce el grosor de la rueda metros');

if (diametro > 1.4){
    alert('la rueda es para un vehículo grande');
    
} else if (diametro <= 1.4 || diametro >= 0.8){
    alert('La rueda es para un vehículo mediano');
} else if (diametro > 0){
    alert('la rieda es para un vehículo pequeño')

} else if ((diametro >= 1.4 && grosor < 0.4) ||(diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)){
    alert('el grosor para esta rueda es inferior al recomendado');
}