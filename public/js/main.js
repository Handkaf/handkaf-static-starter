(() => {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  const smallScreen = window.matchMedia('(max-width: 720px)');
  const darkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  let savedTheme;
  try { savedTheme = localStorage.getItem('handkaf-theme'); } catch { /* Storage can be blocked. */ }
  if (savedTheme === 'dark' || savedTheme === 'light') root.dataset.theme = savedTheme;
  const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : darkScheme.matches;
  const updateThemeButton = () => {
    const dark = isDark();
    themeButton.setAttribute('aria-pressed', String(dark));
    themeButton.setAttribute('aria-label', dark ? 'Aktifkan tema terang' : 'Aktifkan tema gelap');
    themeButton.textContent = dark ? 'Tema terang' : 'Tema gelap';
  };
  if (themeButton) {
    themeButton.hidden = false;
    updateThemeButton();
    themeButton.addEventListener('click', () => {
      const theme = isDark() ? 'light' : 'dark';
      root.dataset.theme = theme;
      try { localStorage.setItem('handkaf-theme', theme); } catch { /* Session-only theme is enough. */ }
      updateThemeButton();
    });
    darkScheme.addEventListener('change', updateThemeButton);
  }
  if (menuButton && navigation) {
    let open = false;
    const renderMenu = () => {
      menuButton.hidden = !smallScreen.matches;
      navigation.hidden = smallScreen.matches && !open;
      menuButton.setAttribute('aria-expanded', String(smallScreen.matches && open));
    };
    menuButton.addEventListener('click', () => { open = !open; renderMenu(); });
    navigation.addEventListener('click', (event) => {
      if (smallScreen.matches && event.target.closest('a')) {
        open = false;
        menuButton.focus();
        renderMenu();
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && open && smallScreen.matches) {
        open = false;
        renderMenu();
        menuButton.focus();
      }
    });
    smallScreen.addEventListener('change', () => { open = false; renderMenu(); });
    renderMenu();
  }
  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
