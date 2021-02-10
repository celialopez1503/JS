const times = [60, 75, 79, 80, 55, 59];

let total = 0

const resultado = times.reduce(function(acumulador, valorActual){
    total = acumulador + valorActual;
    return (total);                                                  /// el valor que vuelve a entrar es el total

}, 0);

console.log(total);

const media = total/ times.length       // escribo times.lenght en vez de seis porque si modifico el array tendria que cambiar

console.log (media);