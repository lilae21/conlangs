document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.querySelector('.dropdown');
  const menuIcon = document.getElementById('menu-icon');

  if (!menuContainer || !menuIcon) return;

  menuContainer.addEventListener('mouseenter', () => {
    menuIcon.classList.remove('ph-book');
    menuIcon.classList.add('ph-book-open-text');
  });

  menuContainer.addEventListener('mouseleave', () => {
    menuIcon.classList.remove('ph-book-open-text');
    menuIcon.classList.add('ph-book');
  });
});
