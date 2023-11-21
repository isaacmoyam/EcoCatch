console.log("Cargado");

let irDos = document.getElementById("cambiar");
let irUno = document.getElementById("volver");
let oscuro = document.getElementById("boton");

// Verificar si el modo oscuro está activado en localStorage
if (localStorage.getItem("modoOscuro") === "activado") {
    activarModoOscuro();
}

if (irDos) irDos.onclick = ir;
if (irUno) irUno.onclick = ir;

oscuro.onclick = toggleModoOscuro;

function toggleModoOscuro() {
    // Toggle del modo oscuro en el body
    document.body.classList.toggle("dark-mode");

    // Toggle del modo oscuro en los botones
    let botones = document.querySelectorAll("button");
    botones.forEach(button => {
        button.classList.toggle("dark-mode");
    });

    // Guardar el estado del modo oscuro en localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("modoOscuro", "activado");
    } else {
        localStorage.setItem("modoOscuro", "desactivado");
    }
}

function activarModoOscuro() {
    // Activar el modo oscuro en el body
    document.body.classList.add("dark-mode");

    // Activar el modo oscuro en los botones
    let botones = document.querySelectorAll("button");
    botones.forEach(button => {
        button.classList.add("dark-mode");
    });
}

function ir() {
    // Obtener la parte de la ruta de la URL actual
    var rutaActual = window.location.pathname;

    // Comparar la parte de la ruta para determinar qué página está cargada
    if (rutaActual === '/index.html') {
        window.location.href = 'vista1.html';
    } else if (rutaActual === '/vista1.html') {
        window.location.href = 'index.html';
    }
}
