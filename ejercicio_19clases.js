'use strict'

class food {
    constructor (name, type, cal){       //constructor es un método de la clase food
    this.name = name;
    this.type = type;        
    this.cal = cal;
                                           // this.nombrePropiedad = valor; 
    }
};

const donut = new food('donut', 'sweet', '452');            //new para hacer referencia a la propiedad de la clase que se ha declarado
const beer = new food('beer', 'sour', '452');
const apple = new food('apple', 'sweet', '452');

console.log(donut);



//

class cuadrado {
    constructor (lado){
        this.lado = lado;
        this.perimetro = lado*4;
        this.area = lado*lado; 

        this.calcularVolumen = function(){      //cuando creo una funcion que necesito parámetros si sigo esta sintaxis 
            return console.log(lado*lado*lado);

        }
    
    }
    print (){
        console.log ('printed');     //las funciones dentro de una clase no hace falta sintaxis es simplemente un nombre
    }
};

const pequeño = new cuadrado(2);
console.log(pequeño);

const mediano = new cuadrado(5);
console.log(mediano);

const grande = new cuadrado(10);



pequeño.calcularVolumen();          //tengo que ejecutar la funcion function



pequeño.print();




