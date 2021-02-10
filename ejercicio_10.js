//EJERCICIO PAR O IMPAR


function checkNumber (numero1) {            ///CUANDO LA FUNCION LLEGA AL RETURN SE CUMPLE , en esta parte declara la función:
    let resultado = (numero1%2)
     if (resultado == 0){
     return alert('es un numero entero');
     }else{ (resultado != 0)
        return alert ('es un numero impar')
     }
    
};

checkNumber (numero1);           ///esto es necesario para que se ejecute la función
checkNumber (23);
checkNumber (20);
