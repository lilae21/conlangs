document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const menu = document.getElementById('main-menu');
  const dropdown = toggleBtn.closest('.dropdown');

  let closeTimeout;

  const openMenu = () => {
    menu.style.display = 'block';
    menu.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
  };
  const closeMenu = () => {
    menu.style.display = 'none';
    menu.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  // CLICK
  toggleBtn.addEventListener('click', (e) => {
    const isOpen = menu.getAttribute('aria-hidden') === 'false';
    isOpen ? closeMenu() : openMenu();
  });

  // HOVER
  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(closeTimeout);
    openMenu();
  });
  dropdown.addEventListener('mouseleave', () => {
    closeTimeout = setTimeout(closeMenu, 300);
  });
  menu.addEventListener('mouseenter', () => {
    clearTimeout(closeTimeout);
  });
  menu.addEventListener('mouseleave', () => {
    closeTimeout = setTimeout(closeMenu, 300);
  });

  // ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
});
