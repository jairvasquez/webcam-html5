//Comprobamos la compatibilidad de nuestro navegador con User Media
if (tieneUserMedia()) {
 console.log("Ok, el navegador soporta UserMedia");
} else {
 throw new Error('Mala suerte: getUserMedia() no está soportado en tu navegador. ¿Conoces Chrome?');
}

//Comprueba los diferentes motores que dan soporte
function tieneUserMedia() {
 return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
}
