let inputNombre = document.getElementById('nombre');
let inputEmail = document.getElementById('email');
let inputMensaje = document.getElementById('mensaje');
let botonContacto = document.getElementById('botonSend');
let formulario = document.querySelector('form'); 

botonContacto.onclick = function() {
    if (inputNombre.value == "" || inputEmail.value == "" || inputMensaje.value == "") {
        alert("Por favor, complete todos los campos antes de enviar el mensaje.");
    } else {
        alert("¡Gracias por contactarnos! Nuestro equipo recibió el mensaje. Nos pondremos en contacto contigo pronto.");
    formulario.reset();
    }
};