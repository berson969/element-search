const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach((link) => {
    link.onclick =  (event) => {

        const subMenus = document.querySelectorAll('.menu_sub');

        subMenus.forEach((subMenu) => {

        const comparison_1 = link.parentElement === subMenu.parentElement;
        const comparison_2 = link.parentElement.parentElement === subMenu.parentElement.parentElement;

            if (!comparison_1 && comparison_2) {
                subMenu.classList.remove('menu_active');
            }
        })

        const isSubMenu = link.closest('.menu__item').querySelector('.menu_sub')
        if (isSubMenu) {
            event.preventDefault();
            isSubMenu.classList.toggle('menu_active');
        }
    }
})
