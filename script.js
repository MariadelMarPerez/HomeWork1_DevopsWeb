document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btnOpciones');
    const displayMensaje = document.getElementById('contenedorMensaje');

    if (boton && displayMensaje) {
        boton.addEventListener('click', () => {
            // Insertar el texto
            displayMensaje.textContent = "Hola mundo, me encuentro explorando en el desarrollo web";
            
            // Que aparezca por consola 
            displayMensaje.style.display = "block";
        });
    }
});