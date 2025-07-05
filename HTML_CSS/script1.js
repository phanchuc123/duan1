const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');
const inner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
let index = 0;

function updateCarousel() {
  inner.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % items.length;
  updateCarousel();
});
