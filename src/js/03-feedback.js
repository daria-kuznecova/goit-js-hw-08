import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');
// const button = document.querySelector('button');
const STORAGE_KEY = 'feedback-form-state';
// const formData = {
//   email: '',
//   message: '',
// };

// updateDate();

// button.addEventListener('submit', saveDate);

function formEl() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ email: input.value, message: textArea.value })
  );
}

function getFeedBack() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!data) return;
  input.value = data.email;
  textArea.value = data.message;
}

function submit(event) {
  event.preventDefault();
  if (input.value.trim() != '' && textArea.value.trim() != '') {
    console.log({
      email: input.value,
      message: textArea.value,
    });
  }
  form.reset();
  localStorage.clear();
}

input.addEventListener('input', throttle(formEl, 500));
textArea.addEventListener('input', throttle(formEl, 500));
form.addEventListener('submit', submit);

getFeedBack();
