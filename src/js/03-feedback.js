import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('input[name="email"]'),
  messageInput: document.querySelector('textarea[name="message"]'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

const savedFeedbackState = localStorage.getItem(STORAGE_KEY);
let feedbackState = JSON.parse(savedFeedbackState) ?? {
  email: '',
  message: '',
};
formWithSavedValue();

function onFormInput(evt) {
  const { name, value } = evt.target;
  feedbackState[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackState));
}
function onFormSubmit(evt) {
  evt.preventDefault();

  const isFieldsFilled = refs.emailInput.value && refs.messageInput.value;

  if (isFieldsFilled) {
    console.log(feedbackState);
    localStorage.removeItem(STORAGE_KEY);
    feedbackState = { email: '', message: '' };
    refs.form.reset();
  } else {
    alert('You should fill the EMAIL and write some MESSAGE!!!');
  }
}
function formWithSavedValue() {
  refs.emailInput.value = feedbackState.email || '';
  refs.messageInput.value = feedbackState.message || '';
}

