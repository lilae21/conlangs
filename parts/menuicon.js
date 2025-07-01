const menuContainer = document.querySelector('.fixed');
const menuIcon = menuContainer.querySelector('.menu');
menuContainer.addEventListener('mouseenter', function() {
    menuIcon.className = 'ph-duotone ph-book-open-text menu';
});
menuContainer.addEventListener('mouseleave', function() {
    menuIcon.className = 'ph-duotone ph-book menu';
});
