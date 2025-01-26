// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// agregando codigo para obtener lista de amigos desde cuadro de texto


function agregarAmigo() {
    const input = document.getElementById('amigo');
    const lista = document.getElementById('listaAmigos');
    const nombre = input.value.trim();

// condicional if que permite obtener valor o enviar un mensaje si el boton añadir es presionado sin que se haya ingresado un nombre
    if (nombre) {
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = nombre;
        lista.appendChild(nuevoAmigo);
        input.value = ''; // Limpiar el campo de entrada
    } else {
        alert('Por favor, escribe un nombre antes de añadir.');
    }
}

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const lista = document.getElementById('listaAmigos');
    const nombre = input.value.trim();

    // Validar si hay un nombre ingresado
    if (nombre) {
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = nombre;
        lista.appendChild(nuevoAmigo);
        input.value = ''; // Limpiar el campo de entrada
    } else {
        alert('Por favor, escribe un nombre antes de añadir.');
    }
}

function sortearAmigo() {
    const lista = document.getElementById('listaAmigos');
    const amigos = lista.getElementsByTagName('li'); // Obtener todos los elementos <li> de la lista

    // Verificar si hay elementos en la lista
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo seleccionado
    const amigoSeleccionado = amigos[indiceAleatorio].textContent;

    // Mostrar el resultado en el div "resultado"
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `🎉 El amigo secreto es: ${amigoSeleccionado} 🎉`;
}


