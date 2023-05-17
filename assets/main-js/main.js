$(".services-carousel").owlCarousel({
    autoplay: true,
    items: 3,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        485: {
            items: 1,
        },
        768: {
            items: 2,
        },
        960: {
            items: 3,
        },
        1200: {
            items: 3,
        },
    },
});