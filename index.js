const navItems = document.querySelector('.navitems')
const Bi = document.querySelector('.bi-list');

Bi.addEventListener('click', () => {
    navItems.classList.toggle('active');
})