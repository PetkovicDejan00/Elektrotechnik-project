const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuBtnBurger = document.querySelector('.menu-btn__burger');
const menuLinks = document.querySelectorAll('.menu__links__link');
const scrollBtns = document.querySelectorAll('.scroll-btn');
const mouseBtn = document.querySelector('.scroll-mouse');


menuBtn.addEventListener('click', function () {
    menu.classList.toggle("menu-disabled");
    menuBtnBurger.classList.toggle("open");
});

menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.toggle("menu-disabled");
        menuBtnBurger.classList.toggle("open");
    });
})

// mouse scroll btn

scrollBtns.forEach(function (btn) {
    btn.addEventListener('mouseover', function () {
        mouseBtn.style.opacity = "0.6";

    })
    btn.addEventListener('mouseout', function () {
        mouseBtn.style.opacity = "1";
    })
})
