/* =====================================================
   SCROLL ANIMATION CONTROLLER
   Works with animations.css
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ----------------------------------
     SCROLL REVEAL OBSERVER
  ---------------------------------- */

  const animatedElements = document.querySelectorAll(
    ".reveal, .fade, .slide-left, .slide-right, .zoom-in, .parallax, .stagger"
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("active");

          // Only animate once
          revealObserver.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px"
    }
  );

  animatedElements.forEach(el => revealObserver.observe(el));


  /* ----------------------------------
     STAGGER TEXT AUTO-WRAP
  ---------------------------------- */

  document.querySelectorAll(".stagger").forEach(el => {

    if (el.dataset.staggered) return;

    const text = el.textContent.trim();

    el.innerHTML = "";

    [...text].forEach(char => {

      const span = document.createElement("span");

      span.textContent = char === " " ? "\u00A0" : char;

      el.appendChild(span);

    });

    el.dataset.staggered = "true";

  });


  /* ----------------------------------
     PARALLAX SCROLL EFFECT
  ---------------------------------- */

  const parallaxItems = document.querySelectorAll(".parallax img");

  function parallaxScroll() {

    parallaxItems.forEach(img => {

      const rect = img.getBoundingClientRect();

      const speed = 0.15;

      const offset = rect.top * speed;

      img.style.transform =
        `translateY(${offset}px) scale(1.15)`;

    });

  }

  window.addEventListener("scroll", parallaxScroll);
  parallaxScroll();


  /* ----------------------------------
     NAVBAR SCROLL EFFECT
  ---------------------------------- */

  const nav = document.querySelector(".nav");

  function handleNavbar() {

    if (!nav) return;

    if (window.scrollY > 80) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }

  }

  window.addEventListener("scroll", handleNavbar);
  handleNavbar();


  /* ----------------------------------
     SMOOTH ANIMATION SYNC
  ---------------------------------- */

  let ticking = false;

  function updateAnimations() {

    if (!ticking) {

      window.requestAnimationFrame(() => {

        parallaxScroll();
        handleNavbar();

        ticking = false;

      });

      ticking = true;
    }

  }

  window.addEventListener("scroll", updateAnimations);


  /* ----------------------------------
     DEBUG (OPTIONAL)
  ---------------------------------- */

  // Uncomment if you want to see animation triggers
  /*
  animatedElements.forEach(el => {
    el.style.outline = "1px dashed red";
  });
  */

});
/* ----------------------------------
   IMAGE TILT EFFECT
---------------------------------- */

document.querySelectorAll(".tilt").forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 18;
    const rotateY = (x - centerX) / 18;

    card.style.transform =
      `perspective(1000px)
       rotateX(${-rotateX}deg)
       rotateY(${rotateY}deg)
       scale(1.05)`;

  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });

});
// Fade Up Scroll Animation

const elements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

elements.forEach(el => observer.observe(el));
