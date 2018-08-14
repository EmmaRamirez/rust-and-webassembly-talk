(function () {
    var state = {
        currentSlide: 0
    };
    window.addEventListener('DOMContentLoaded', function (event) {
        var slides = Array.from(document.querySelectorAll('section'));
        slides.forEach(function (slide, index) {
            slide.id = "slide-" + index;
        });
        slides[state.currentSlide].classList.add('current');
    });
})();
