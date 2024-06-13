// Obtener la fecha y hora actual de Perú
function getPeruDateTime() {
  const date = new Date();
  const options = {
    timeZone: 'America/Lima',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  const fecha = date.toLocaleDateString('es-PE', options);
  const hora = date.toLocaleTimeString('es-PE', options);
  document.getElementById('fecha').innerHTML = fecha;
  document.getElementById('hora').innerHTML = hora;
}

// Mostrar y ocultar el menú
function toggleMenu() {
  const menuOptions = document.querySelector('.menu-options');
  menuOptions.style.display = menuOptions.style.display === 'block'? 'none' : 'block';
}

// Agregar evento de click al menú
document.querySelector('.menu-icon').addEventListener('click', toggleMenu);

// Agregar evento de click a las tarjetas
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', () => {
    const url = card.getAttribute('data-url');
    window.location.href = url;
  });
});

// Actualizar la fecha y hora cada segundo
setInterval(getPeruDateTime, 1000);

// Inicializar la fecha y hora
getPeruDateTime();