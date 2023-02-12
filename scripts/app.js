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

let swiper = new Swiper(".mySwiper", {
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

let swiper2 = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    /*autoplay:{
        delay: 500,
        disableOnInteraction: false,
    },*/
    pagination: {
        el: ".swiper-pagination",
    },
});
