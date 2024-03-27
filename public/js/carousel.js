const fanikWrapper = document.querySelector(".fanik-wrapper");
const indicators = [...document.querySelectorAll(".indicators button")];
let currentTestimonial = 0; // Default 0

function moveToNextTestimonial() {
  const nextTestimonial = (currentTestimonial + 1) % indicators.length; // Loop back to the first at the end
  indicators[currentTestimonial].classList.remove("active");
  fanikWrapper.style.marginLeft = `-${100 * nextTestimonial}%`;
  indicators[nextTestimonial].classList.add("active");
  currentTestimonial = nextTestimonial;
}

indicators.forEach((item, i) => {
  item.addEventListener("click", () => {
    indicators[currentTestimonial].classList.remove("active");
    fanikWrapper.style.marginLeft = `-${100 * i}%`;
    item.classList.add("active");
    currentTestimonial = i;
    // Reset interval on manual click
    clearInterval(autoScroll);
    autoScroll = setInterval(moveToNextTestimonial, 3000); // Restart auto-scrolling
  });
});

let autoScroll = setInterval(moveToNextTestimonial, 3000); // Auto-scroll every 3 seconds
document.querySelector('.left-arrow').addEventListener('click', () => {
const previousTestimonial = (currentTestimonial - 1 + indicators.length) % indicators.length; // Loop back to the last at the beginning
changeTestimonial(previousTestimonial);
});

document.querySelector('.right-arrow').addEventListener('click', () => {
const nextTestimonial = (currentTestimonial + 1) % indicators.length; // Loop back to the first at the end
changeTestimonial(nextTestimonial);
});

function changeTestimonial(index) {
indicators[currentTestimonial].classList.remove('active');
fanikWrapper.style.marginLeft = `-${100 * index}%`;
indicators[index].classList.add('active');
currentTestimonial = index;
// Reset interval on arrow click
clearInterval(autoScroll);
autoScroll = setInterval(moveToNextTestimonial, 3000); // Restart auto-scrolling
}

//swipe
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(evt) {
touchStartX = evt.touches[0].clientX;
}

function handleTouchMove(evt) {
touchEndX = evt.touches[0].clientX;
}

function handleTouchEnd() {
if (touchStartX - touchEndX > 75) {
// Swiped left, go next
changeTestimonial((currentTestimonial + 1) % indicators.length);
} else if (touchEndX - touchStartX > 75) {
// Swiped right, go previous
changeTestimonial((currentTestimonial - 1 + indicators.length) % indicators.length);
}
// Reset interval on swipe
clearInterval(autoScroll);
autoScroll = setInterval(moveToNextTestimonial, 3000);
}

document.querySelector(".fanik-wrapper").addEventListener("touchstart", handleTouchStart, false);
document.querySelector(".fanik-wrapper").addEventListener("touchmove", handleTouchMove, false);
document.querySelector(".fanik-wrapper").addEventListener("touchend", handleTouchEnd, false);