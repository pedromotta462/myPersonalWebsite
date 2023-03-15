/* Show things */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/* Show scrollup */
const targetElements = document.querySelectorAll('.showscrollup');
const button = document.getElementById('scholl-up');

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            button.classList.remove('show-scroll');
        } else {
            button.classList.add('show-scroll');
        }
    });
});

targetElements.forEach(targetElement => {
    observer2.observe(targetElement);
});

/* Swipper1 */

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/* Swipper2 */

var swiper2 = new Swiper(".mySwiper2", {
    effect: "coverflow",
    cssMode: false,
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
        200:{
            slidesPerView: 1.2,
        },
        440:{
            slidesPerView: 1.3,
        },
        640: {
            slidesPerView: 1.7,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 400,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
});


/*
var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: '2.5',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});


let swiper2 = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    /*autoplay:{
        delay: 500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});*/
