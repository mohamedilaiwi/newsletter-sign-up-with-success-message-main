'use strict';


const card = document.querySelector('.card');
const subscribeCard = document.querySelector('.subscribe-card');
const company = document.querySelector('.company');
const formContainer = document.querySelector('.form-container');
const btn  = document.querySelector('.subscribe-text .btn');
const emailInput = document.getElementById('email-input');
const emailErrorRaised = document.querySelector('.error-email');

console.log(emailInput);
subscribeCard.classList.add('hidden');

formContainer.addEventListener('submit', function(event) {
    event.preventDefault();

    let email = event.target.querySelector('.form').value;

    // Is input field empty?
    if (email === "" || !email.includes('@') || !email.includes('.com')) {
        // If it is, display error message
        console.error("Input field is empty!");
        // or add some HTML to display an error to the user
        emailInput.style.border = "2px solid red";
        emailInput.style.background = 'hsl(4, 100%, 67%, 10%)';
        // or append an error message
        emailErrorRaised.classList.remove('hidden');
        emailErrorRaised.style.display = 'block';
    } else {
        console.log(email);
        company.innerHTML = `<b>${email}</b>`;
        
        card.classList.add('hidden');
        subscribeCard.classList.remove('hidden');
        emailErrorRaised.style.display = 'none';
        emailInput.style.border = '1px solid hsla(231, 7%, 60%, 30%)';
        emailInput.style.background = 'white';
    }

});

btn.addEventListener('click', function () {
    subscribeCard.classList.add('hidden');
    card.classList.remove('hidden');
    
    document.getElementById('email-input').value = '';
});
