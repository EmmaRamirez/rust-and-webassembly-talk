(() => {
    const state = {
        currentSlide: 0,
    };

    window.addEventListener('DOMContentLoaded', event => {
        const slides = Array.from(document.querySelectorAll('section'));
        slides.forEach((slide, index) => {
            slide.id = `slide-${index}`;
        });
        slides[state.currentSlide].classList.add('current');
    });

})();