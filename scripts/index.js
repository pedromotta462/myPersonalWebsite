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
