import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
  submitButton: document.querySelector('.feedback-form button'),
};

refs.form.addEventListener('input', throttle(saveToLs, 500));
refs.form.addEventListener('submit', handleSubmit);

function saveToLs() {
  const emailValue = refs.emailInput.value;
  const messageValue = refs.message.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: emailValue, message: messageValue })
  );
}

function loadFromLs() {
  const storedState = localStorage.getItem('feedback-form-state');
  if (storedState) {
    const { email, message } = JSON.parse(storedState);
    refs.emailInput.value = email;
    refs.message.value = message;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const emailValue = refs.emailInput.value;
  const messageValue = refs.message.value;

  localStorage.removeItem('feedback-form-state');
  console.log({ email: emailValue, message: messageValue });

  refs.emailInput.value = '';
  refs.message.value = '';
}

loadFromLs();
