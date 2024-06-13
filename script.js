// Selecionamos los elementos necesarios
const container = document.querySelector('.container');
const menu = document.querySelector('.menu');
const items = document.querySelectorAll('.item');
const menuSvg = document.querySelector('.menu-svg');
const menuOptions = document.querySelector('.menu-options');

// Variables para almacenar el estado actual
let currentIndex = 0;
let isMenuOpen = false;

// Seleccionar el primer elemento por defecto
items[0].classList.add('selected');

// Función para mover el cursor con las flechas del control remoto
function navigate(event) {
  switch (event.key) {
    case 'ArrowUp':
      currentIndex = Math.max(0, currentIndex - 1);
      break;
    case 'ArrowDown':
      currentIndex = Math.min(items.length - 1, currentIndex + 1);
      break;
    case 'Enter':
      if (isMenuOpen) {
        // Cerrar menú desplegable
        menuOptions.style.display = 'none';
        isMenuOpen = false;
      } else {
        // Abrir enlace seleccionado
        const selectedItem = items[currentIndex];
        const url = selectedItem.getAttribute('data-url');
        window.location.href = url;
      }
      break;
    case 'Right':
      if (isMenuOpen) {
        // Mover cursor en menú desplegable
        const options = menuOptions.querySelectorAll('span');
        const currentOptionIndex = Array.prototype.indexOf.call(options, document.activeElement);
        const nextOptionIndex = (currentOptionIndex + 1) % options.length;
        options[nextOptionIndex].focus();
      } else {
        // Abrir menú desplegable
        menuOptions.style.display = 'block';
        isMenuOpen = true;
      }
      break;
    case 'Left':
      if (isMenuOpen) {
        // Cerrar menú desplegable
        menuOptions.style.display = 'none';
        isMenuOpen = false;
      }
      break;
  }
  // Actualizar posición del cursor
  items.forEach((item) => {
    item.classList.remove('selected');
  });
  items[currentIndex].classList.add('selected');
}

// Agregar eventos de teclado
document.addEventListener('keydown', navigate);

// Agregar evento de click en los elementos del menú
items.forEach((item) => {
  item.addEventListener('click', () => {
    const url = item.getAttribute('data-url');
    window.location.href = url;
  });
});

// Agregar evento de click en el menú desplegable
menuOptions.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    const optionIndex = Array.prototype.indexOf.call(menuOptions.children, event.target);
    switch (optionIndex) {
      case 0:
        // Opción 1
        break;
      case 1:
        // Opción 2
        break;
      case 2:
        // Opción 3
        break;
    }
  }
});

// Agregar función para mostrar la fecha y hora actual
setInterval(() => {
  const fecha = new Date();
  const hora = fecha.toLocaleTimeString('es-PE');
  const fechaTexto = fecha.toLocaleDateString('es-PE');
  document.getElementById('fecha').textContent = fechaTexto;
  document.getElementById('hora').textContent = hora;
}, 1000);