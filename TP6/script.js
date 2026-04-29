const formulario = document.getElementById('form');

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateForm();
});

function validateForm(){

    hideError();

    let surname = document.getElementById('surname-input').value.trim();
    let name = document.getElementById('name-input').value.trim();
    let dni = document.getElementById('dni-input').value.trim();
    let email = document.getElementById('email-input').value.trim();

    if (!validateText(surname)){
        showError('Apellido con solo letras.');
        return;
    };
    if (!validateText(name)){
        showError('Nombre con solo letras.');
        return;
    };
    if (!validateEmail(email)){
        showError('Email invalido.');
        return;
    };
    if (!validateDNI(dni)){
        showError('DNI invalido.');
        return;
    };

    showSuccess();

    function validateText(text){
        let onlyText = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        return onlyText.test(text);
    };
    function validateDNI(dni){
        return (!isNaN(dni) && dni.length == 8);
    };
    function validateEmail(email){
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    };
    function showError(e){
        let message = document.getElementById('error');
        message.classList.add('error');
        message.textContent = e;
        hideSuccess();
    };
    function hideError(){
        let message = document.getElementById('error');
        message.classList.remove('error');
        message.textContent = '';
    };
    function showSuccess(){
        let message = document.getElementById('success');
        message.classList.add('success');
        message.textContent = 'Datos registrados con éxito.';
    }
    function hideSuccess(){
        let message = document.getElementById('success');
        message.classList.remove('success');
        message.textContent = '';
    }
};
