/* ---------- Theme toggle ---------- */
const root = document.documentElement;
const themeButton = document.getElementById('theme-toggle');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  // the button names the mode you will switch to
  themeButton.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
}

applyTheme(root.getAttribute('data-theme'));

themeButton.addEventListener('click', function () {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try {
    localStorage.setItem('theme', next);
  } catch (e) {
    /* storage can be blocked; the theme still works for this visit */
  }
});

/* ---------- Contact form validation ---------- */
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function showError(input, message) {
  document.getElementById(input.id + '-error').textContent = message;
  input.setAttribute('aria-invalid', 'true');
}

function clearError(input) {
  document.getElementById(input.id + '-error').textContent = '';
  input.removeAttribute('aria-invalid');
}

// returns an error message, or '' if the value is fine
function getError(input) {
  const value = input.value.trim();

  if (input.id === 'name' && value === '') {
    return 'Please enter your name.';
  }
  if (input.id === 'email') {
    if (value === '') {
      return 'Please enter your email address.';
    }
    if (!emailPattern.test(value)) {
      return 'This email looks wrong. Use the format name@example.com.';
    }
  }
  if (input.id === 'message' && value === '') {
    return 'Please write a message before sending.';
  }
  return '';
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  formStatus.textContent = '';

  const fields = [form.elements.name, form.elements.email, form.elements.message];
  let firstInvalid = null;

  fields.forEach(function (input) {
    const message = getError(input);
    if (message) {
      showError(input, message);
      if (!firstInvalid) firstInvalid = input;
    } else {
      clearError(input);
    }
  });

  if (firstInvalid) {
    firstInvalid.focus();
    return;
  }

  // nothing is actually sent
  formStatus.textContent = 'Thanks, ' + form.elements.name.value.trim() +
    '! Your message passed validation. (Demo form: nothing was sent.)';
  form.reset();
});

// clear an error as soon as the user starts fixing the field
form.addEventListener('input', function (event) {
  if (event.target.getAttribute('aria-invalid') === 'true') {
    clearError(event.target);
  }
});
