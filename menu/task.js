const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {

        const subMenus = document.querySelectorAll('.menu');

        subMenus.forEach((subMenu) => {
            if (subMenu.parentElement.parentElement === link.closest('.menu')) {
                subMenu.classList.remove('menu_active');
            }
        });

        const subMenu = link.closest('.menu__item').querySelector('.menu_sub')
        if (subMenu) {
            event.preventDefault();
            subMenu.classList.toggle('menu_active')
        }
    })
})
