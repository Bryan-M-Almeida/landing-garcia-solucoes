const whatsappIcone = document.querySelector('#whatsappIconeFlutuante');
const whatsapp = '5522992435074'
whatsappIcone.addEventListener('click', () => {
    const url = `https://wa.me/${whatsapp}`
    window.open(url, '_blank');
})

const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: { slidesPerView: 1 },  // celular
        768: { slidesPerView: 2 },  // tablet
        1024: { slidesPerView: 3 }  // pc
    }
});