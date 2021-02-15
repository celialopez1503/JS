//Vamos a generar paginas interactivas que se van a generar con accion y reaccion de los usuarios. Será a través de listeners.
//callback = funcion


const element = document.getElementById('boton');  //creo elemento

element.addEventListener('click', showMsg); //llamo al listener  va sin pararentesis showMsg (si no lo ejecutaria el)

function showMsg () {
    console.log ('funcion ejecutada')   //ejecuto, hay que darle a click 
}; 





