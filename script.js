const emailInput = document.getElementById('email');
const icon_error = document.querySelector('.icon-error');
var validateEmail = true;
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const verificationMessage = document.querySelector('.verification');
const subscriptionForm = document.querySelector('.subscriptionForm');

subscriptionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateEmail) {
        subscriptionForm.reset(); // Reset the form fields
        setTimeout(() => location.reload(), 0); // Reload the page
    }
});
emailInput.addEventListener('input', (e) => {
    e.preventDefault();
    if (emailInput.value) {
        verificationMessage.style.display = 'none';
        icon_error.classList.remove("error");
    }
});

// validates email address
function validate(inputText) {
    if (inputText.value.match(mailformat)) {
        validateEmail = true;
        subscriptionForm.classList.remove("invalid-email");
    }
    else {

        verificationMessage.style.display = 'block';
        validateEmail = false;
        icon_error.classList.add("error");
        subscriptionForm.classList.add("invalid-email");
    }
    inputText.value.match(mailformat);
}
// email submission functions used in submit event mentioned above
function validEmail() {
    validate(emailInput);
    if (validateEmail == true) {
        verificationMessage.style.display = 'none';
    }
}