new Swiper('.image__slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    // mousewheel: {
    //     sensitivity: 1,
    //     eventTarget: '.image-slider',
    // },
    slidesPerView: 1,
    initialSlide: 1,
    autoHeight: true,
    spaceBetween: 25,
});