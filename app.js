// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const lista = document.getElementById('listaAmigos');
    const nombre = input.value.trim();

    if (nombre) {
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = nombre;
        lista.appendChild(nuevoAmigo);
        input.value = ''; // Limpiar el campo de entrada
    } else {
        alert('Por favor, escribe un nombre antes de añadir.');
    }
}
