// Get trending boxes container
const trendingBoxes = document.querySelector('.trending-boxes');

// Get left and right arrow buttons
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const boxWidth = document.querySelector('.trending-box').offsetWidth;
const gap = 90;
const totWidth = boxWidth + gap;

// Set initial position
let currPos = 0;

// Function to detect mobile
function isMobile() {
  return window.innerWidth <= 768;
}

function moveLeft() {
  if (isMobile()) return; // Stop movement on mobile
  if (currPos < 0) {
    currPos += totWidth;
  } else {
    currPos = -(totWidth * (trendingBoxes.children.length - 3));
  }
  trendingBoxes.style.transform = `translateX(${currPos}px)`;
}

function moveRight() {
  if (isMobile()) return; // Stop movement on mobile
  if (currPos > -(totWidth * (trendingBoxes.children.length - 3))) {
    currPos -= totWidth;
  } else {
    currPos = 0;
  }
  trendingBoxes.style.transform = `translateX(${currPos}px)`;
}

// Add event listeners to the arrows
leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);

// Automatically move every 8 seconds (only on desktop)
setInterval(() => {
  if (!isMobile()) {
    moveRight();
  }
}, 8000);
