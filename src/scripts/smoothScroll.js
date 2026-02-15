/* =====================================================
   CINEMATIC SMOOTH SCROLL ENGINE
   No External Libraries
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  // Disable on mobile (native scroll is better)
  if (window.innerWidth < 768) return;


  /* ----------------------------------
     CONFIG
  ---------------------------------- */

  const ease = 0.08;      // Scroll smoothness (0.05–0.12)
  let current = 0;
  let target = 0;


  /* ----------------------------------
     WRAP CONTENT
  ---------------------------------- */

  const body = document.body;

  const wrapper = document.createElement("div");
  wrapper.classList.add("smooth-wrapper");

  while (body.firstChild) {
    wrapper.appendChild(body.firstChild);
  }

  body.appendChild(wrapper);


  /* ----------------------------------
     SET BODY HEIGHT
  ---------------------------------- */

  function setHeight() {
    document.body.style.height =
      wrapper.getBoundingClientRect().height + "px";
  }

  setHeight();
  window.addEventListener("resize", setHeight);


  /* ----------------------------------
     SCROLL LOOP
  ---------------------------------- */

  function smoothScroll() {

    target = window.scrollY;

    current += (target - current) * ease;

    wrapper.style.transform =
      `translate3d(0, ${-current}px, 0)`;

    requestAnimationFrame(smoothScroll);

  }

  smoothScroll();


  /* ----------------------------------
     PREVENT SUB-PIXEL BLUR
  ---------------------------------- */

  let last = 0;

  function fixBlur() {

    if (Math.abs(current - last) > 0.1) {
      last = current;
      wrapper.style.transform =
        `translate3d(0, ${-Math.round(current)}px, 0)`;
    }

    requestAnimationFrame(fixBlur);

  }

  fixBlur();

});
