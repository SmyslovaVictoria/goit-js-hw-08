import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const elements = {};

autofill();

form.addEventListener(
  'input',
  throttle(e => {
    elements[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(elements));
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  console.log(elements);

});

function autofill() {
  const savedElements = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (savedElements) {
    email.value = savedElements.email || '';
    message.value = savedElements.message || '';
  }
}

// import throttle from 'lodash.throttle';
// const obj = {};

// const ref = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
//   input: document.querySelector('.feedback-form input'),
// };

// ref.form.addEventListener('input', throttle(onFormInput, 500));
// ref.form.addEventListener('submit', onFormSubmit);
// returnText();

// function onFormInput(e) {
//   obj[e.target.name] = e.target.value;
//   localStorage.setItem('feedback-form-state', JSON.stringify(obj));
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

//   if (ref.input.value === '' || ref.textarea.value === '') {
//     return alert('Please fill in all the fields!');
//   }
//   e.currentTarget.reset();
//   localStorage.removeItem('feedback-form-state');
// }

// function returnText() {
//   const savedData = localStorage.getItem('feedback-form-state');
//   const parsedData = JSON.parse(savedData);
//   if (parsedData) {
//     ref.input.value = parsedData.email;
//     ref.textarea.value = parsedData.message;
//   }
// }
