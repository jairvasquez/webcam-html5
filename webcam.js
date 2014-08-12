//Seleccionamos el primer objeto vídeo del DOM, donde cargaremos
//el stream que genere nuestra webcam
var video = document.querySelector('video');

//Comprobamos la compatibilidad de nuestro navegador con User Media
if (tieneUserMedia()) {
 console.log("Ok, el navegador soporta UserMedia");
} else {
 throw new Error('Mala suerte: getUserMedia() no está soportado en tu navegador. ¿Conoces Chrome?');
}

//Comprueba los diferentes motores que dan soporte
function tieneUserMedia() {
 return !!(navigator.getUserMedia || navigator.webkitGetUserMedia 
    || navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

//Similar a cuando usamos prefijos de CSS, usamos variables 
//para contener los posibles objetos usados por cada navegador 

navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.msGetUserMedia;

window.URL = window.URL || window.webkitURL;

//Comprobamos si existe getUserMedia y si no lanzamos un error
if (navigator.getUserMedia) {
 //Le pasamos un array con video y/o audio para acceder a webcam y micro respectivamente. Después una
 //función que se ejecutará a modo de callback y otra a modo de fallback.
 navigator.getUserMedia({video: true, audio: true}, exito, error);
 //Llámamos getUserMedia, pedimos acceso a vídeo. Si tenemos éxito llamamos una función y si no lanzamos un error.
} else {
 error();
}

//Si soportamos getUserMedia y damos permiso, nuestro tag de video mostrará el stream que recogemos.
//esta función recibe un parámetro que es el stream de video y/o audio recogido por los dispositivos.
function exito(stream) {
 video.src = window.URL.createObjectURL(stream);
}

//Nuestro error lanza un simple mensaje alert.
function error(e) {
 throw new Error("No me dejaste mostrarte las maravillas de getUserMedia");
}
