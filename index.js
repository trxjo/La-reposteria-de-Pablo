document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
    $(".navul").toggleClass(".show");
    // Rotar el icono del menú cuando se abre o cierra el menú
    $(".menu-icon").toggleClass("rotate");
  });
  document.addEventListener("DOMContentLoaded", function() {
    var alerta = document.getElementById("miAlerta");
    alerta.style.display = "block";
});

function cerrarAlerta() {
    var alerta = document.getElementById("miAlerta");
    alerta.style.display = "none";
};
const mostrarPopUp = document.getElementById("mostrarPopUp");
const cajonTexto = document.getElementById("cajonTexto");
const cerrarPopUp = document.getElementById("cerrarPopUp");

// Muestra el cajón de texto al hacer clic en el enlace
mostrarPopUp.addEventListener("click", function(event) {
    event.preventDefault(); // Evita la acción predeterminada del enlace
    cajonTexto.style.display = "block";
});

// Cierra el cajón de texto al hacer clic en el botón "Cerrar"
cerrarPopUp.addEventListener("click", function() {
    cajonTexto.style.display = "none";
});

const mostrarPopUp2 = document.getElementById("mostrarPopUp2");
const cajonTexto2 = document.getElementById("cajonTexto2");
const cerrarPopUp2 = document.getElementById("cerrarPopUp2");

// Muestra el cajón de texto al hacer clic en el enlace
mostrarPopUp2.addEventListener("click", function(event) {
    event.preventDefault(); // Evita la acción predeterminada del enlace
    cajonTexto2.style.display = "block";
});

// Cierra el cajón de texto al hacer clic en el botón "Cerrar"
cerrarPopUp2.addEventListener("click", function() {
    cajonTexto2.style.display = "none";
});
const mostrarPopUp3 = document.getElementById("mostrarPopUp3");
const cajonTexto3 = document.getElementById("cajonTexto3");
const cerrarPopUp3 = document.getElementById("cerrarPopUp3");

// Muestra el cajón de texto al hacer clic en el enlace
mostrarPopUp3.addEventListener("click", function(event) {
    event.preventDefault(); // Evita la acción predeterminada del enlace
    cajonTexto3.style.display = "block";
});

// Cierra el cajón de texto al hacer clic en el botón "Cerrar"
cerrarPopUp3.addEventListener("click", function() {
    cajonTexto3.style.display = "none";
});

const mostrarPopUp4 = document.getElementById("mostrarPopUp4");
const cajonTexto4 = document.getElementById("cajonTexto4");
const cerrarPopUp4 = document.getElementById("cerrarPopUp4");

// Muestra el cajón de texto al hacer clic en el enlace
mostrarPopUp4.addEventListener("click", function(event) {
    event.preventDefault(); // Evita la acción predeterminada del enlace
    cajonTexto4.style.display = "block";
});

// Cierra el cajón de texto al hacer clic en el botón "Cerrar"
cerrarPopUp4.addEventListener("click", function() {
    cajonTexto4.style.display = "none";
});
