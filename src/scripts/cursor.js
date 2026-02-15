/* =====================================================
   PREMIUM CUSTOM CURSOR SYSTEM
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  // Disable on touch devices
  if ("ontouchstart" in window) return;

  /* ----------------------------------
     CREATE CURSOR ELEMENTS
  ---------------------------------- */

  const cursor = document.createElement("div");
  const follower = document.createElement("div");

  cursor.classList.add("cursor");
  follower.classList.add("cursor-follower");

  document.body.appendChild(cursor);
  document.body.appendChild(follower);


  /* ----------------------------------
     CURSOR POSITION
  ---------------------------------- */

  let mouseX = 0;
  let mouseY = 0;

  let posX = 0;
  let posY = 0;

  const speed = 0.15;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.transform =
      `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });


  function animate() {

    posX += (mouseX - posX) * speed;
    posY += (mouseY - posY) * speed;

    follower.style.transform =
      `translate3d(${posX}px, ${posY}px, 0)`;

    requestAnimationFrame(animate);
  }

  animate();


  /* ----------------------------------
     HOVER EFFECTS
  ---------------------------------- */

  const hoverElements = document.querySelectorAll(
    "a, button, .btn, .card"
  );

  hoverElements.forEach(el => {

    el.addEventListener("mouseenter", () => {
      cursor.classList.add("active");
      follower.classList.add("active");
    });

    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("active");
      follower.classList.remove("active");
    });

  });


  /* ----------------------------------
     PORTFOLIO SPECIAL LABEL
  ---------------------------------- */

  const portfolioItems = document.querySelectorAll(".portfolio .card");

  portfolioItems.forEach(item => {

    item.addEventListener("mouseenter", () => {
      cursor.classList.add("view-mode");
      cursor.innerHTML = "<span>View</span>";
    });

    item.addEventListener("mouseleave", () => {
      cursor.classList.remove("view-mode");
      cursor.innerHTML = "";
    });

  });

});
