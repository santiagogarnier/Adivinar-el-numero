// Aca el juego selecciona un numero al azar para que adivines
let numeroAzar = Math.floor(Math.random() * 100) + 1;


//obtener los elementos del DOM
let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');

//esta accion se ejecuta cuando se toque el boton comprobar
function chequearResultado() {

    let numeroIngresado = parseInt(numeroEntrada.value);

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100 ) {
        mensaje.textContent = "La expresion ingresada no es valida, por favor, que sea un numero entre 1 y 100"
        mensaje.style.color = 'red';
        return;
    }
    if (numeroIngresado == numeroAzar) {
        mensaje.textContent = 'Perfecto! Adivinaste el numero';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;

    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = " Mas alto! El numero es mayor al que ingresaste";
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = "Mas bajo! El numero es menor al que ingresaste";
        mensaje.style.color = 'red';
    }
}