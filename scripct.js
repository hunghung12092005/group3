/* vuốt chuyển slide */
let touchstartX = 0;
let touchendX = 0;
let test = 0;
const carousel = document.getElementById('carouselExampleIndicators');

carousel.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

carousel.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    if (touchendX < touchstartX) {
        var carouselInstance = new bootstrap.Carousel(carousel);
        carouselInstance.next();
    }

    if (touchendX > touchstartX) {
        var carouselInstance = new bootstrap.Carousel(carousel);
        carouselInstance.prev();
    }
}
/* vuốt chuyển slide end */
