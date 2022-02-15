const form = document.getElementById('form')
const username = document.getElementById('username');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function matchPassword(input, input2) {
    if(input.value !== input2.value){
        showError(password, "password does not match");
        showError(password2, "password does not match");
    }
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    if(username.value === ''){
        showError(username, "Username is required");
    } else {
        showSuccess(username);
    }

    if(firstname.value === '') {
        showError(firstname, "Firstname is required");
    } else {
        showSuccess(firstname);
    }

    if(lastname.value === '') {
        showError(lastname, "Lastname is required");
    } else {
        showSuccess(lastname);
    } 

    if(email.value === '') {
        showError(email, "email is required");
    } else {
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password, "password is required");
    } else {
        showSuccess(password);
    }

    if(password2.value === '') {
        showError(password2, 'confirm password is required');
    } else {
        showSuccess(password2);
    }

    if(password.value !== password2.value) {
        matchPassword(password, password2);
    } else {
        showSuccess
    }
})