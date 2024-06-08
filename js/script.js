document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded');

    let slides = document.querySelectorAll('.slides img');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('visible');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('visible');
    }

    slides[currentSlide].classList.add('visible');
    setInterval(nextSlide, 3000);
});