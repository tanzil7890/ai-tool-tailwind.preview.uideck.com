const scriptURL = 'https://script.google.com/macros/s/AKfycbwr-xt22sTDTgd2erEOUST-uh3Chda9twe3YAc3JO4abOtUr2MGByjY7OepPWhG7QAO7g/exec'

const form = document.forms['contact-form']
const successNotification = document.getElementById('success-notification');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                successNotification.style.display = 'block'; // Show the success notification
                form.reset(); // Clear the form
            } else {
                alert("Error submitting the form. Please try again.");
            }
        })
        .catch(error => console.error('Error!', error.message));
});
