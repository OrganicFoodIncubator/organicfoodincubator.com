toggleMenu = (menu) => {
    menu.style.display === 'flex' ? (menu.style.display = 'none') : (menu.style.display = 'flex');
}

menu = document.getElementById('menu');
toggle = document.getElementById('menu-toggle');

toggle.addEventListener('click', () => toggleMenu(menu));