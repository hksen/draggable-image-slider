const sliderContainer = document.querySelector('.slider-block');
const violetLight = document.querySelector('.violet-light');

let isDragging = false; 
let startX;
let scrollLeft;

// Handle mouse down on slider
sliderContainer.addEventListener('mousedown', (e) => {
  isDragging = true; 
  sliderContainer.classList.add('active');
  startX = e.pageX - sliderContainer.offsetLeft;
  scrollLeft = sliderContainer.scrollLeft;
});

// Handle mouse leave on slider
sliderContainer.addEventListener('mouseleave', () => {
  isDragging = false; 
  sliderContainer.classList.remove('active');
  violetLight.classList.remove('visible');
});

// Handle mouse up on slider
sliderContainer.addEventListener('mouseup', () => {
  isDragging = false; 
  sliderContainer.classList.remove('active');
  violetLight.classList.remove('visible');
});

// Handle mouse move on slider
sliderContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return; 
  e.preventDefault();
  const x = e.pageX - sliderContainer.offsetLeft;
  const scrollOffset = scrollLeft - (x - startX);
  
  // Set the new scroll position of the slider
  sliderContainer.scrollLeft = scrollOffset;

  // Check if the slider has reached the end
  if (sliderContainer.scrollLeft + sliderContainer.offsetWidth >= sliderContainer.scrollWidth) {
    violetLight.classList.add('visible');
  } else {
    violetLight.classList.remove('visible');
  }
});
