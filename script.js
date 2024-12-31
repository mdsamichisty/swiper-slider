const swiper = new Swiper('.swiper1', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: "16",

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: "16",
    autoplay: {}
});

const swiper3 = new Swiper('.swiper3', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 6,
    spaceBetween: "16",
    autoplay: {}
});

const swiper4 = new Swiper('.swiper4', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: "16",
    autoplay: {
        delay: 5000,

    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper5 = new Swiper('.swiper5', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    initialSlide: 2,
    loop: true,
    centeredSlides: true,
    spaceBetween: "24px",
    autoplay: {
        pauseOnMouseEnter: true,

    },
    // And if we need scrollbar
    scrollbar: false,
});