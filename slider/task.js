const sliderItems = document.querySelectorAll('.slider__item');
const prevButton = document.querySelector('.slider__arrow_prev');
const nextButton = document.querySelector('.slider__arrow_next');
const dots = document.querySelectorAll('.slider__dot');

function getCurrentIndex() {
    return Array.from(sliderItems).findIndex(item => item.classList.contains('slider__item_active'))
}

function showSlide(index) {
    const currentIndex = getCurrentIndex()
    sliderItems[currentIndex].classList.remove('slider__item_active');
    sliderItems[index].classList.add('slider__item_active');
    dots[currentIndex].classList.remove('slider__dot_active');
    dots[index].classList.add('slider__dot_active');
}

function showNextSlide() {
    const currentIndex = getCurrentIndex()
    let nextIndex = currentIndex + 1;
    if (nextIndex >= sliderItems.length) {
        nextIndex = 0;
    }
    showSlide(nextIndex);
}

function showPrevSlide() {
    const currentIndex = getCurrentIndex()
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
        prevIndex = sliderItems.length - 1;
    }
    showSlide(prevIndex);
}


nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);
dots.forEach((dot, index) => {
   dot.addEventListener('click', () => {
       showSlide(index);
   })
});