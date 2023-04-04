const footerCopyright = document.getElementById('copyright');
const year = new Date();
footerCopyright.innerText = `© ${year.getFullYear()} Andrew Harvard.`;

function themeToggle() {
  const themeButton = document.createElement('button');
  const footer = document.querySelector('footer');
  footer.insertAdjacentElement('beforeend', themeButton);

  function updateDOM() {
    if (sessionStorage.getItem('Color Scheme') == 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      themeButton.innerText = 'Go Light';
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      themeButton.innerText = 'Go Dark';
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

  themeButton.addEventListener('click', function () {
    const currentColorScheme = sessionStorage.getItem('Color Scheme');
    sessionStorage.setItem(
      'Color Scheme',
      currentColorScheme === 'light' ? 'dark' : 'light',
    );
    updateDOM();
  });
}

themeToggle();
