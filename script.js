(function () {
    'use strict';

    // 1. Elementos del DOM
    const form = document.getElementById('bootcamp-form');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const experienciaSelect = document.getElementById('experiencia');

    // 2. Prefijo único (Namespace) para las llaves de localStorage
    const NAMESPACE = 'devskill_up_';

    // 3. Funciones de validación
    const validarCampo = (input, elementoError, mensaje) => {
        if (!input.value.trim()) {
            elementoError.textContent = mensaje;
            input.style.borderColor = '#ef4444';
            return false;
        } else {
            elementoError.textContent = '';
            input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            return true;
        }
    };

    const validarEmail = (input, elementoError) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!input.value.trim()) {
            elementoError.textContent = 'El correo electrónico es obligatorio.';
            input.style.borderColor = '#ef4444';
            return false;
        } else if (!emailRegex.test(input.value.trim())) {
            elementoError.textContent = 'Ingresa un formato de correo válido (ej. usuario@dominio.com).';
            input.style.borderColor = '#ef4444';
            return false;
        } else {
            elementoError.textContent = '';
            input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            return true;
        }
    };

    // 4. Lógica de Autoguardado en tiempo real (Persistencia)
    const guardarEnLocalStorage = (llave, valor) => {
        localStorage.setItem(`${NAMESPACE}${llave}`, valor);
    };

    // Escuchadores de eventos 'input' y 'change' para registrar cambios al escribir
    nombreInput.addEventListener('input', function () {
        guardarEnLocalStorage('nombre', nombreInput.value);
        validarCampo(nombreInput, document.getElementById('error-nombre'), 'Por favor, ingresa tu nombre completo.');
    });

    emailInput.addEventListener('input', function () {
        guardarEnLocalStorage('email', emailInput.value);
        validarEmail(emailInput, document.getElementById('error-email'));
    });

    experienciaSelect.addEventListener('change', function () {
        guardarEnLocalStorage('experiencia', experienciaSelect.value);
        validarCampo(experienciaSelect, document.getElementById('error-experiencia'), 'Debes seleccionar tu nivel de experiencia.');
    });

    // 5. Escuchador del evento de envío (Submit)
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const esNombreValido = validarCampo(nombreInput, document.getElementById('error-nombre'), 'Por favor, ingresa tu nombre completo.');
        const esEmailValido = validarEmail(emailInput, document.getElementById('error-email'));
        const esExperienciaValida = validarCampo(experienciaSelect, document.getElementById('error-experiencia'), 'Debes seleccionar tu nivel de experiencia.');

        if (esNombreValido && esEmailValido && esExperienciaValida) {
            console.log('Validación aprobada. Datos listos para el envío externo.');
        }
    });

})();