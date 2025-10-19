const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
// Optional parameters
direction: 'vertical',
loop: true,
grabCusor: true,
spaceBetween: 25,

// If we need pagination
pagination: {
el: '.swiper-pagination',
clickable: true,
dynamicBullets: true,
},

// Navigation arrows
navigation: {
nextEl: '. swiper-button-next',
prevEl: '. swiper-button-prev',
},

//Responsive breakpoints
breakpoints: {
    0: {
        sliderPerView: 1
    },
    768: {
        sliderPerView: 2
    },
    1024: {
        sliderPerView: 3
    }
}
});
