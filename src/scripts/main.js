const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(
  ".fade-up, .fade-left, .fade-right, .zoom-in"
).forEach(el => {
  observer.observe(el);
});
