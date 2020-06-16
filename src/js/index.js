let popupWindow = document.getElementById('popupWindow');
let popupBackground = document.getElementById('popupBackground');
let rulesCheckbox = document.getElementById('rules');
let formSumbit = document.getElementById('formSumbit');
let form = document.getElementById('signUp');
let errorMessage = document.getElementById('error');
let showPopupForm = document.getElementById('show-popup-form');
let success = document.getElementById('success');
let passwordNotification = document.getElementById('password__notification');

function showPopup(){
    if(popupWindow.classList.contains('fadeInDown')){
        popupWindow.classList.remove('fadeInDown');
    }
    popupWindow.classList.add('fadeInUp');
    popupWindow.showModal();
}
function closePopup(){
    popupWindow.classList.add('fadeInDown');
    setTimeout(() => {
        rulesCheckbox.checked = false;
        formSumbit.disabled = !rulesCheckbox.checked;
    popupWindow.close();
   }, 500);
}
function agreeRules(){
    formSumbit.disabled = !rulesCheckbox.checked;
}


form.addEventListener('submit', function (event) {
    event.preventDefault();
    let email = form.email.value;
    let password = form.password.value;   
    if(checkPassword(password) && checkEmail(email)){
        errorMessage.innerHTML = '';
        showPopupForm.style.display = 'none';
        formSumbit.innerHTML = 'Loading...';
        setTimeout(() => {
            closePopup();
            success.classList.add('show__success');
        }, 2500);
    }else{
        if(!checkEmail(email)){
            errorMessage.innerHTML = "Pls entere correct E-mail\n like: expamle@gmail.com";
        }
        if(!checkPassword(password)){
            showPasswordNotification();
            errorMessage.innerHTML = "Pls entere correct Password";
        }
    }
});


function checkEmail(email){
    let correctEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return correctEmail;
}
function checkPassword(password){
    let correctPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
    return correctPassword;
}
function showPasswordNotification(){
    passwordNotification.style.display = 'block';
    setTimeout(() => {
    passwordNotification.style.display = 'none';
    }, 3000);
}