var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1408: {
            slidesPerView: 4,
        },
        1086: {
            slidesPerView: 3,
        },
        704: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        },
    },
});
document.querySelector(".swiper-button-next").click();