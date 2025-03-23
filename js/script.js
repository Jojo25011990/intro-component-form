'use strict';

// *** Select Elements ***
const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

// *** Form Listener Submit ***
form.addEventListener('submit', e => {
  e.preventDefault();

  checkRequiredValues([firstName, lastName, email, password]);
  validateEmail(email);
  checkPasswordLength(password, 5, 10);
});

// *** Check All Inputs ***
function checkRequiredValues(inputArr) {
  inputArr.forEach(input => {
    const inputEl = input.value.trim();

    if (inputEl === '') {
      errorMessageAndIcon(input, `${input.id} is required`);

      // *** Correct challenge message: firstname, lastname and password ***
      // errorMessageAndIcon(input, `${input.id} cannot be empty`);
    } else {
      removeMessageAndIcon(input);
    }
  });
}

// *** Add Error Message + Icon ***
function errorMessageAndIcon(input, message) {
  const formControlInputs = input.parentElement;
  formControlInputs.classList.add('error');

  const formErrorMessage = formControlInputs.querySelector(
    '.form__error-message'
  );
  formErrorMessage.textContent = message;
}

// *** Remove Error Message + Icon ***
function removeMessageAndIcon(input) {
  const formControlInputs = input.parentElement;
  formControlInputs.classList.remove('error');
}

// *** Check Email + Regex ***
function validateEmail(input) {
  const inputElement = input.value.trim();

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;

  if (!emailRegex.test(inputElement)) {
    errorMessageAndIcon(input, `${input.id} is not a valid email`);

    // *** Correct challenge message ***
    // errorMessageAndIcon(input, `Looks like this is not email`);
  } else {
    removeMessageAndIcon(input);
  }
}

// *** Check Password + Length ( min and max ) ***
function checkPasswordLength(input, min, max) {
  const inputElement = input.value.trim();

  if (inputElement.length < min) {
    errorMessageAndIcon(
      input,
      `${input.id} must be at least ${min} characters`
    );
  } else if (inputElement.length > max) {
    errorMessageAndIcon(
      input,
      `${input.id} must be less than ${max} characters`
    );
  } else {
    removeMessageAndIcon(input);
  }
}
