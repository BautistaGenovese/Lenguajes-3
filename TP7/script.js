$(document).ready(function() {
    $('.form-container').on('submit', function(e) {
        e.preventDefault();
        validateForm();
    });

    function validateForm() {
        hideError();

        let surname = $('#surname-input').val().trim();
        let name = $('#name-input').val().trim();
        let dni = $('#dni-input').val().trim();
        let email = $('#email-input').val().trim();

        if (!validateText(surname)) {
            showError('Apellido con solo letras.');
            return;
        }
        if (!validateText(name)) {
            showError('Nombre con solo letras.');
            return;
        }
        if (!validateEmail(email)) {
            showError('Email invalido.');
            return;
        }
        if (!validateDNI(dni)) {
            showError('DNI invalido.');
            return;
        }

        addToTable(surname, name, dni, email);
        showSuccess();

        function validateText(text) {
            let onlyText = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
            return onlyText.test(text);
        }
        function validateDNI(dni) {
            return (!isNaN(dni) && dni.length == 8);
        }
        function validateEmail(email) {
            let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return emailPattern.test(email);
        }
        function showError(e) {
            $('#error').addClass('error').text(e);
            hideSuccess();
        }
        function hideError() {
            $('#error').removeClass('error').text('');
        }
        function showSuccess() {
            $('#success').addClass('success').text('Datos registrados con éxito.');
        }
        function hideSuccess() {
            $('#success').removeClass('success').text('');
        }
        function addToTable(surname, name, dni, email) {
            const fechaHora = new Date().toLocaleString('es-ES');
            const fila = `
                <tr>
                    <td>${surname}</td>
                    <td>${name}</td>
                    <td>${dni}</td>
                    <td>${email}</td>
                    <td>${fechaHora}</td>
                </tr>
            `;
            $('#registrosBody').append(fila);
            $('#surname-input').val('');
            $('#name-input').val('');
            $('#dni-input').val('');
            $('#email-input').val('');
            $('#surname-input').focus();
        }
    }
});
