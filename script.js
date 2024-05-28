// Función para obtener la información del dispositivo
function getDeviceInfo() {
    let deviceModel = navigator.userAgent;
    document.getElementById('device-model').textContent = deviceModel;
}

// Función para obtener la señal WiFi
function getWifiSignal() {
    // Esto requiere una API o extensión específica ya que los navegadores no exponen esta información directamente.
    // Aquí usaremos un valor ficticio para ilustrar.
    let signalStrength = Math.floor(Math.random() * 101); // Valor ficticio entre 0 y 100
    document.getElementById('wifi-signal').textContent = signalStrength;
}

// Función para actualizar la hora de Perú
function updatePeruTime() {
    const peruTime = new Date().toLocaleTimeString('es-PE', {
        timeZone: 'America/Lima',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('peru-time').textContent = peruTime;
}

// Inicializar la información del dispositivo
getDeviceInfo();

// Actualizar la señal WiFi cada segundo
setInterval(getWifiSignal, 1000);

// Actualizar la hora de Perú cada segundo
setInterval(updatePeruTime, 1000);
updatePeruTime();  // Llamar inmediatamente para mostrar la hora sin esperar un segundo