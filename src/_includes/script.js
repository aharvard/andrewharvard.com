const footerCopyright = document.getElementById('copyright');
const year = new Date();
footerCopyright.innerText = `© ${year.getFullYear()} Andrew Harvard.`;

function themeToggle() {
  const footerToggleElements = document.querySelectorAll(
    '.footer-color-mode-toggle',
  );
  footerToggleElements.forEach(el => {
    const themeButton = document.createElement('button');
    themeButton.classList.add('primary', 'small');
    el.insertAdjacentElement('beforeend', themeButton);
  });

  const themeButtons = document.querySelectorAll(
    '.footer-color-mode-toggle button',
  );
  function updateDOM() {
    if (sessionStorage.getItem('Color Scheme') == 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      themeButtons.forEach(button => (button.innerText = 'Toggle Light Mode'));
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      themeButtons.forEach(button => (button.innerText = 'Toggle Dark Mode'));
    }
  }

  window.matchMedia('(prefers-color-scheme: light)').addListener(e => {
    sessionStorage.setItem('Color Scheme', !e.matches ? 'dark' : 'light');
    updateDOM();
  });

  if (!sessionStorage.getItem('Color Scheme')) {
    console.log('Mode is not set');
    sessionStorage.setItem(
      'Color Scheme',
      window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark',
    );
  }

  updateDOM();

  themeButtons.forEach(button =>
    button.addEventListener('click', function () {
      const currentColorScheme = sessionStorage.getItem('Color Scheme');
      sessionStorage.setItem(
        'Color Scheme',
        currentColorScheme === 'light' ? 'dark' : 'light',
      );
      updateDOM();
    }),
  );
}

themeToggle();
