// script.js

document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.querySelector("main");
  if (mainContent) {
    mainContent.style.opacity = 0;
    mainContent.style.transition = "opacity 1s ease-in-out";
    requestAnimationFrame(() => {
      mainContent.style.opacity = 1;
    });
  }

  // Optional: Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});
