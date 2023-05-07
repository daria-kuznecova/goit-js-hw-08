import throttle from 'lodash.throttle';

const form = document.querySelector('#feedback-form');
const inputEmail = document.querySelector('.input');
const textAreaMessage = document.querySelector('.textarea');
const FEEDBACK_FORM_KEY = 'feedback-form-state';

// updateInput();
// form.addEventListener('input', saveInformation);

function saveInformation(event) {
  localStorage.setItem(
    FEEDBACK_FORM_KEY,
    JSON.stringify({
      email: inputEmail.ariaValueMax,
      message: textAreaMessage.value,
    })
  );
}
