(function () {
    var state = {
        currentSlide: 0,
        slides: null
    };
    var setCurrent = function (slides) {
        slides.forEach(function (s) { return s.classList.remove('current'); });
        slides[state.currentSlide].classList.add('current');
    };
    window.addEventListener('DOMContentLoaded', function (event) {
        state.slides = Array.from(document.querySelectorAll('section'));
        state.slides.forEach(function (slide, index) {
            slide.id = "slide-" + index;
        });
        setCurrent(state.slides);
    });
    var arrowLeft = function () {
        if (state.currentSlide === 0) {
            state.currentSlide = 0;
        }
        else {
            state.currentSlide += 1;
        }
        setCurrent(state.slides);
    };
    var arrowRight = function () {
        if (state.currentSlide + 1 >= state.slides.length) {
            state.currentSlide = 0;
        }
        else {
            state.currentSlide += 1;
        }
        setCurrent(state.slides);
    };
    window.addEventListener('keydown', function (event) {
        var key = event.key;
        if (event.key == 'ArrowLeft') {
            arrowLeft();
        }
        if (event.key == 'ArrowRight') {
            arrowRight();
        }
    });
})();
