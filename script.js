document.querySelector('.btn-container').addEventListener('click', () => {
  alert('SEJA BEM VINDO AO KEY SAFE!');
});

const carousel = document.querySelector('.carousel');
const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});


