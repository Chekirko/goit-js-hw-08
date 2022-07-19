import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  //   formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(parsedData);
  localStorage.removeItem(STORAGE_KEY);
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    refs.input.value = parsedData[refs.input.name];
    refs.textarea.value = parsedData[refs.textarea.name];
  }
}

populateForm();
