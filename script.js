// Select all text elements with the class 'fade-in'
const textElements = document.querySelectorAll('.fade-in');


document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");

  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});


// Create an Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add 'visible' class when in viewport
      observer.unobserve(entry.target); // Stop observing once it has appeared
    }
  });
}, { threshold: 0.1 }); // Trigger when 10% of the element is visible

// Observe each text element
textElements.forEach(element => {
  observer.observe(element);
});
