const swiper2 = new Swiper('.sample-slider', {
    loop: true,
    effect: "cube",
    cubeEffect: {
        // slideShadows: true,
        // shadow: true,
        // shadowOffset: 100,
        // shadowScale: 1,
    },
    grabCursor: true,
    speed: 1500,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})