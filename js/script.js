const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    console.log('Menu is now', isOpen ? 'open' : 'closed');

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation menu' : 'Open navigation menu',
    );

    menuToggle.textContent = isOpen ? '✕' : '☰';
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation menu');
      menuToggle.textContent = '☰';
    });
  });
}

const themeButton = document.getElementById('themeButton');

themeButton.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  // Check the current theme
  if (document.body.classList.contains('dark-mode')) {
    themeButton.textContent = '☀️';
    themeButton.setAttribute('aria-label', 'Switch to light mode');
    themeButton.setAttribute('title', 'Switch to light mode');
  } else {
    themeButton.textContent = '🌙';
    themeButton.setAttribute('aria-label', 'Switch to dark mode');
    themeButton.setAttribute('title', 'Switch to dark mode');
  }
});