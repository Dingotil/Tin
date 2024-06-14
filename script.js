function navigateTo(url) {
    window.location.href = url;
}
// Función para mostrar la animación de carga
function showLoader() {
  document.querySelector('.loader-container').style.display = 'flex';
}

// Función para ocultar la animación de carga
function hideLoader() {
  document.querySelector('.loader-container').style.display = 'none';
  document.querySelector('.content').classList.add('loaded');
}

// Mostrar la animación de carga al inicio
showLoader();

// Ocultar la animación de carga cuando la página esté cargada
window.addEventListener('load', function() {
  hideLoader();
});