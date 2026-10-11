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

