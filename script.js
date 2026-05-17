(function () {
    'use strict';

    // 1. Elementos del DOM
    const form = document.getElementById('bootcamp-form');
    const container = document.querySelector('.register-container');
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

    // 5. NUEVO: Lógica de Restauración y Verificación de Estado
    const mostrarMensajeAgradecimiento = (nombre) => {
        form.style.display = 'none';
        
        const mensajeDiv = document.createElement('div');
        mensajeDiv.className = 'converted-message';
        mensajeDiv.innerHTML = `
            <h3 style="color: var(--color-success); margin-bottom: 1rem; font-family: var(--font-heading); font-size: 1.5rem;">¡Registro Confirmado!</h3>
            <p style="color: var(--color-text-main); font-size: 1.05rem; margin-bottom: 0.5rem;">Hola <strong>${nombre}</strong>, ya tienes un lugar reservado en nuestra lista de aspirantes prioritarios.</p>
            <p style="color: var(--color-text-muted); font-size: 0.9rem;">Pronto enviaremos las credenciales de acceso a la sesión informativa a tu correo electrónico.</p>
        `;
        mensajeDiv.style.textAlign = 'center';
        mensajeDiv.style.padding = '1rem 0';
        
        container.appendChild(mensajeDiv);
    };

    const restaurarYVerificarEstado = () => {
        // Verificar si el usuario ya se convirtió (envió el formulario con éxito previamente)
        const usuarioConvertido = localStorage.getItem(`${NAMESPACE}convertido`);
        const nombreGuardado = localStorage.getItem(`${NAMESPACE}nombre`);

        if (usuarioConvertido === 'true' && nombreGuardado) {
            mostrarMensajeAgradecimiento(nombreGuardado);
            return;
        }

        // Si no está convertido, restaurar los campos que tengan datos parciales guardados
        if (nombreInput && localStorage.getItem(`${NAMESPACE}nombre`)) {
            nombreInput.value = localStorage.getItem(`${NAMESPACE}nombre`);
        }
        if (emailInput && localStorage.getItem(`${NAMESPACE}email`)) {
            emailInput.value = localStorage.getItem(`${NAMESPACE}email`);
        }
        if (experienciaSelect && localStorage.getItem(`${NAMESPACE}experiencia`)) {
            experienciaSelect.value = localStorage.getItem(`${NAMESPACE}experiencia`);
        }
    };

    // 6. Escuchador del evento de envío (Submit)
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const esNombreValido = validarCampo(nombreInput, document.getElementById('error-nombre'), 'Por favor, ingresa tu nombre completo.');
        const esEmailValido = validarEmail(emailInput, document.getElementById('error-email'));
        const esExperienciaValida = validarCampo(experienciaSelect, document.getElementById('error-experiencia'), 'Debes seleccionar tu nivel de experiencia.');

        if (esNombreValido && esEmailValido && esExperienciaValida) {
            // Simulamos conversión exitosa para este commit. En el siguiente configuraremos el fetch real.
            localStorage.setItem(`${NAMESPACE}convertido`, 'true');
            mostrarMensajeAgradecimiento(nombreInput.value.trim());
        }
    });

    // Inicializar la configuración al cargar el script
    restaurarYVerificarEstado();

})();