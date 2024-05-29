const form = document.getElementById('form');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const togglePassword = document.querySelector('.toggle-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value.trim();
  const lName = lastName.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  let isValid = true;

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    document.getElementById('firstName-error').style.display = 'block';
    isValid = false;
  } else {
    firstName.classList.remove('error');
    document.getElementById('firstName-error').style.display = 'none';
  }

  // Check last name
  if (lName === '') {
    lastName.classList.add('error');
    document.getElementById('lastName-error').style.display = 'block';
    isValid = false;
  } else {
    lastName.classList.remove('error');
    document.getElementById('lastName-error').style.display = 'none';
  }

  // Check email
  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    document.getElementById('email-error').style.display = 'block';
    isValid = false;
  } else {
    email.classList.remove('error');
    document.getElementById('email-error').style.display = 'none';
  }

  // Check password
  if (passwordVal === '') {
    password.classList.add('error');
    document.getElementById('password-error').style.display = 'block';
    isValid = false;
  } else {
    password.classList.remove('error');
    document.getElementById('password-error').style.display = 'none';
  }

  if (isValid) {
    alert('Form submitted successfully!');
  }
});

togglePassword.addEventListener('click', () => {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  togglePassword.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
