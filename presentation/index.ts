import { greet } from './wasm_game_of_life';

greet("Rust and WASM");

interface ArrayConstructor {
    from<T>(arrayLike: ArrayLike<T>): Array<T>;
}

(() => {
    const state = {
        currentSlide: 0,
        slides: null,
    };

    const setCurrent = (slides) => {
        slides.forEach(s => s.classList.remove('current'));
        slides[state.currentSlide].classList.add('current');
    }

    window.addEventListener('DOMContentLoaded', event => {
        state.slides = Array.from(document.querySelectorAll('section'));
        state.slides.forEach((slide, index) => {
            slide.id = `slide-${index}`;
        });
        setCurrent(state.slides);
    });

    const arrowLeft = () => {
        if (state.currentSlide === 0) {
            state.currentSlide = 0;
        } else {
            state.currentSlide += 1;
        }
        setCurrent(state.slides);
    }

    const arrowRight = () => {
        if (state.currentSlide + 1 >= state.slides.length) {
            state.currentSlide = 0;
        } else {
            state.currentSlide += 1;
        }
        setCurrent(state.slides);
    }

    window.addEventListener('keydown', event => {
        const { key } = event;

        if (event.key == 'ArrowLeft') {
            arrowLeft();
        }

        if (event.key == 'ArrowRight') {
            arrowRight();   
        }
    });

})();