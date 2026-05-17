(function () {
    'use strict';

    // Elementos del DOM
    const form = document.getElementById('bootcamp-form');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const experienciaSelect = document.getElementById('experiencia');

    // Funciones de validación
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

    // Escuchador del evento de envío
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Detener el envío por defecto

        const esNombreValido = validarCampo(nombreInput, document.getElementById('error-nombre'), 'Por favor, ingresa tu nombre completo.');
        const esEmailValido = validarEmail(emailInput, document.getElementById('error-email'));
        const esExperienciaValida = validarCampo(experienciaSelect, document.getElementById('error-experiencia'), 'Debes seleccionar tu nivel de experiencia.');

        if (esNombreValido && esEmailValido && esExperienciaValida) {
            console.log('Validación básica aprobada. Listo para guardar datos.');
            // Aquí se conectará la persistencia en el siguiente commit
        }
    });

})();