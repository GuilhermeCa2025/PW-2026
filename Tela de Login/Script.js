const loginform = document.getElementById('login-form');
const message = document.getElementById('message');


const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('toggle-password');


togglePasswordButton.addEventListener('click', function() {

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordButton.innerText = '🔒'; 
    } else {
        passwordInput.type = 'password';
        togglePasswordButton.innerText = '👁️'; 
    }
});


emailInput.addEventListener('input', function() {
    const emailValue = emailInput.value;
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
        emailError.innerText = "";
    } else if (!emailPattern.test(emailValue)) {
        emailError.innerText = "Por favor, insira um e-mail válido.";
    } else {
        emailError.innerText = ""; 
    }
});


loginform.addEventListener('submit', function(event) {    
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    if (emailError.innerText !== "") {
        message.style.color = "#e74c3c";
        message.innerText = "Corrija os erros antes de continuar.";
        return;
    }

    if (email === "gr8020744@gmail.com" && password === "123456") {
        message.style.color = "#04f368"; 
        message.innerText = "Login realizado com sucesso! Redirecionando...";
    } else {
        message.style.color = "#ff1900"; 
        message.innerText = "E-mail ou senha incorretos.";
    }
});

loginform.addEventListener('reset', function() {
    emailError.innerText = "";
    message.innerText = "";
    passwordInput.type = 'password';
    togglePasswordButton.innerText = '👁️';
});