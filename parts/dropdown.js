document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.fixed.dropdown');
  if (!dropdown) return;

  const dropdownContent = dropdown.querySelector('.dropdown-content');
  let closeTimeout;

  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(closeTimeout);
    dropdownContent.style.display = 'block';
  });

  dropdown.addEventListener('mouseleave', () => {
    closeTimeout = setTimeout(() => {
      dropdownContent.style.display = 'none';
    }, 300);
  });

  dropdownContent.addEventListener('mouseenter', () => {
    clearTimeout(closeTimeout);
  });

  dropdownContent.addEventListener('mouseleave', () => {
    closeTimeout = setTimeout(() => {
      dropdownContent.style.display = 'none';
    }, 300);
  });
});
