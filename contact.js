function validateAndSubmit() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');

    nameInput.classList.remove('error');
    emailInput.classList.remove('error');

    var nameValue = nameInput.value.trim();
    var emailValue = emailInput.value.trim();

    if (nameValue === '') {
        alert('Please enter your name');
        nameInput.classList.add('error');
        return;
    }

    if (emailValue === '' || !isValidEmail(emailValue)) {
        alert('Please enter a valid email address');
        emailInput.classList.add('error');
        return;
    }

    if (confirm('Do you want to submit the form?')) {
        document.getElementById('myForm').submit();
    }
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
