class Factura {
    constructor (cliente, elementos){
        this.cliente = cliente;
        this.elementos =elementos
        this.informacion = {             //asi se declara una pseudoclase
            baseImponible: 0,
            iva: 21,
            total: 0,
            formaPago: 'efectivo'

        };
        this.calcularBaseImponible = function(calculo){
            return this.informacion.baseImponible = (this.elementos.precio*this.elementos.cantidad)

        };
        this.calcularTotal = function(calculando){
          return this.informacion.total= this.informacion.baseImponible* (1+(this.informacion.iva/100))
        };
    }
};

class Cliente {
    constructor(nombre, direccion, telefono, nif){
        this.cliente = nombre;
        this.direccion = direccion;
        this.telefono = telefono; 
        this.nif = nif
    }
};


class Elemento {
    constructor(descripcion, cantidad, precio){
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio
    }
}; 

const celia = new Cliente ('celia', 'leganes', 638, 0236); 
const chaqueta = new Elemento ('roja',100, 1);

console.log(celia);
console.log(chaqueta);

const factura1 = new Factura (celia, chaqueta);    //uno las clases y se me queda guardado en la clase factura. 
console.log(factura1); 

//ejecuto la funcion de la base imponible: 
console.log(factura1.calcularBaseImponible ()); 

//ejecuto iva: 
console.log( factura1.calcularTotal ());




