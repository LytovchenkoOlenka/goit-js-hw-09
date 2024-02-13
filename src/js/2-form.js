'use strict';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('[name="email"]');
const messageInput = feedbackForm.querySelector('[name="message"]');

feedbackForm.addEventListener('input', function () {
  const currentState = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
});

if (localStorage.getItem('feedback-form-state') !== null) {
  const storedState = JSON.parse(localStorage.getItem('feedback-form-state'));

  emailInput.value = storedState.email || '';
  messageInput.value = storedState.message || '';
}

feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const currentData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  if (!currentData.email || !currentData.message) {
    alert('Please fill in both fields of the form.');
    return;
  }

  console.log(currentData);
  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
});
