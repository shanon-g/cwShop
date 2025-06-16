// ========================= HEADER OPACITY =========================
// Get header element
const header = document.querySelector('header');

const scrollThreshold = 100;

// Listen for scroll event
window.addEventListener('scroll', function() {
  // Check if page scrolled past threshold
  if (window.scrollY > scrollThreshold) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ========================= SCROLL TO TOP =========================
// Get button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show button when user scrolls down
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    // Show button when scrolled down >= 100px
    scrollToTopBtn.classList.add('show');
  } else {
    // Hide button when near the top
    scrollToTopBtn.classList.remove('show');
  }
};

// Scroll to the top when clicked
scrollToTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
