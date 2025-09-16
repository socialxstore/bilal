document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".content, .hero h1, .hero p, .hero .contact-icons, .resume-btn");
  const options = { threshold: 0.2 };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
});
