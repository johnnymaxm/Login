function onChangeEmail(){
    toggleButtonDisable();
    toggleEmailErrors();
}

function onChangePassword(){
    toggleButtonDisable();
    togglePasswordError();
}

function login(){
    firebase.auth(); signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response => {
        window.location.href = "pages/home/home.html";
    }).catch(error => {
         alert(getErrorMessage(error));
    });
}

function getErrorMessage(){
    if (error.code == "auth/user-not-found"){
        return "Usuário não encontrado";
    }
    return error.message;
}


function register(){
    window.location.href = "pages/register/register.html";
}

function isEmailValid(){
    const email =  form.email().value;
    if (!email){
        return false;
    }
    return validadeEmail(email);
}

function toggleEmailErrors(){
    const email = form.email().value;
    if (!email){
        form.emailRequiredError().style.display = "block";
    } else {
        form.emailRequiredError().style.display = "none";
    }
    if (validadeEmail(email)){
        form.emailInvalidError().style.display = "none";
    } else {
        form.emailInvalidError().style.display = "block";
    }
}

function togglePasswordError(){
    const password = form.password().value;
    if (!password){
        form.passwordRequiredError ().style.display = "block";
    } else {
         form.passwordRequiredError ().style.display = "none";
    }
}

function toggleButtonDisable(){
    const emailValid = isEmailValid();
    form.recoverPassword().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;

}

function isPasswordValid(){
    const password =  form.password().value;
    if(!password){
        return false;
    }
    return true;
}

    
const form = {
    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    loginButton: () => document.getElementById('login-button'),
    password: () => document.getElementById('password'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    recoverPassword: () => document.getElementById('recover-password-button'),
}