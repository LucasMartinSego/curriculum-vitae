const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,

    // Pagination settings
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10, // Espacio menor en pantallas pequeñas
        },
        640: { // Ajustado a 640px para pantallas pequeñas
            slidesPerView: 2,
            spaceBetween: 15, // Espacio ajustado
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20, // Espacio normal para tablets
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20, // Espacio para pantallas grandes
        },
        1200: {
            slidesPerView: 3, // Se mantiene el mismo número de vistas
            spaceBetween: 30, // Mayor espacio en pantallas extra grandes
        },
    },
});
