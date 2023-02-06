import throttle from 'lodash.throttle';
const obj = {};

const ref = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

ref.form.addEventListener('input', throttle(onFormInput, 500));
ref.form.addEventListener('submit', onFormSubmit);
returnText();

function onFormInput(e) {
  obj[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  if (ref.input.value === '' || ref.textarea.value === '') {
    return alert('Please fill in all the fields!');
  }
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function returnText() {
  const savedData = localStorage.getItem('feedback-form-state');
  const parsedData = JSON.parse(savedData);
  if (parsedData) {
    ref.input.value = parsedData.email;
    ref.textarea.value = parsedData.message;
  }
}
