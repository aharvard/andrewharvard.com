const footerDateSpan = document.getElementById('footer-date');
const year = new Date();
footerDateSpan.innerText = year.getFullYear();

// let PCSDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// let PCSLight = window.matchMedia('(prefers-color-scheme: light)').matches;

// setSessionStorage(PCSDark, PCSLight);
// updateDOM();

// window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
//   e.matches ? setSessionStorage(true, false) : setSessionStorage(false, true);
// });

function themeToggle() {
  const themeButton = document.querySelector('.theme-switch');

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

  // const isDark = sessionStorage.getItem('Dark Mode');
  // const isLight = sessionStorage.getItem('Dark Mode');

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

  // Watch for click on theme button and update UI
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
