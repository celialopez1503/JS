// palabra más larga:

const lista = ['palabra', 'letra', 'uno'];

const palabralarga = lista.reduce (function(acumulador, valorActual){
    if (acumulador.length > valorActual.length) {
        return (acumulador);
    } else {
        return valorActual
    }
},'');

console.log(palabralarga)

