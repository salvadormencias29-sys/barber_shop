window.addEventListener('DOMContentLoaded', () => {
    /* VALIDACION DEL FORMULARIO DE RESERVAS */

    const form = document.querySelector('.form-reserva');
    const nombre = document.getElementById('nombre');
    const telefono = document.getElementById('telefono');
    const correo = document.getElementById('correo');

    const modal = document.getElementById('modal-confirm');
    const cerrarModal = document.getElementById('cerrar-modal');

    const phoneRegex = /^\d{8,9}$/;
    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(\s+[A-Za-zÁÉÍÓÚáéíóúÑñ]+)+$/;
    const gmailRegex = /\S+@\S+\.\S+/;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let nombreVal = nombre.value.trim();
        if(!nameRegex.test(nombreVal)){
            alert('Por favor ingresa tu nombre completo.');
            nombre.focus();
            return;
        }

        let telefonoVal = telefono.value.trim();
        if(!phoneRegex.test(telefonoVal)){
            alert('Número de teléfono inválido. Usa solo dígitos [0-9]');
            telefono.focus();
            return;
        }

        let correoVal = correo.value.trim();
        if(!gmailRegex.test(correoVal)){
            alert('Ingresa correctamente tu correo electrónico');
            correo.focus();
            return;
        }

        // Mostrar modal
        modal.classList.add("activo");
    });

    cerrarModal.addEventListener('click', () => {
        modal.classList.remove('activo');
        form.reset();
    });
});
