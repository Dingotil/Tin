function navigateTo(url) {
    window.location.href = url;
}

// Agregamos un evento para cuando la página esté cargada
window.addEventListener('load', function() {
  // Ocultamos la animación de carga
  document.querySelector('.loading-container').classList.remove('loading');
  document.querySelector('.loading-container').classList.add('loaded');
});