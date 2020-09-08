const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');




function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small')
    small.innerText = message;
}

//validadondo email
// js email regex
function validEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email no valido')
    }
}



function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';


}
//verifica contraeña

function validarPass(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'La contraseña no coincide');
    }
}



//verifica los campos requeridos
function checkCAmpos(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getCampo(input)} es requerido`);
        } else {
            showSuccess(input);
        }
    });
}


//verifica la longitud de los campos
function campoLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getCampo(input)} 
      minimo ${min} caracteres`)
    } else if (input.value.length > max) {
        showError(input, `${getCampo(input)} 
      maximo ${max} caracteres`)
    } else {
        showSuccess(input);
    }
}


//obteniedo el nombre del campo
function getCampo(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkCAmpos([username, email, password, password2]);
    campoLength(username, 2, 10);
    campoLength(password, 6, 15);
    validEmail(email)
    validarPass(password, password2)
})



//evento de escucha
/* forma simple
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (username.value == '') {
        showError(username, 'Deber llenar el campo nombre');
    } else {
        showSuccess(username);
    }

    if (email.value == '') {
        showError(email, 'Deber llenar el campo email');
    } else if (!validEmail(email.value)) {
        showError(email, "El Email no es valido");
    } else {
        showSuccess(email);
    }

    if (password.value == '') {
        showError(password, 'Deber llenar el campo password');
    } else {
        showSuccess(password);
    }

    if (password2.value == '') {
        showError(password2, 'Deber llenar ingresar nuevamente la contraseña');
    } else {
        showSuccess(password2);
    }


})*/