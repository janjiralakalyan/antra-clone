// Scroll Animations (keep yours)

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


// Services Hover Effect

const items = document.querySelectorAll(".service-item");
const image = document.getElementById("servicePreview");
const caption = document.getElementById("serviceText");

if(items && image){

  items.forEach(item => {

    item.addEventListener("mouseenter", () => {

      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      const newImg = item.dataset.img;
      const newText = item.dataset.text;

      image.style.opacity = "0";
      caption.style.opacity = "0";

      setTimeout(() => {

        image.src = newImg;
        caption.textContent = newText;

        image.style.opacity = "1";
        caption.style.opacity = "1";

      }, 250);

    });

  });

}
// Infinite Project Slider

const track = document.getElementById("projectTrack");

if(track){

  const cards = [...track.children];

  cards.forEach(card=>{
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });

}
/* ================= TEAM IMAGE SWITCH ================= */

const teamItems = document.querySelectorAll(".team-item");
const teamImage = document.getElementById("teamPreview");

if(teamItems.length && teamImage){

  teamItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

      // Remove active
      teamItems.forEach(i => i.classList.remove("active"));

      // Add active
      item.classList.add("active");

      const newImg = item.dataset.img;

      // Fade out
      teamImage.style.opacity = "0";

      setTimeout(() => {

        teamImage.src = newImg;
        teamImage.style.opacity = "1";

      }, 200);

    });

  });

}
/* ================= GALLERY PARALLAX ================= */

const gallery = document.getElementById("galleryTrack");

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

window.addEventListener("mousemove", e => {

  const x = (e.clientX / window.innerWidth - 0.5) * 40;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;

  targetX = x;
  targetY = y;

});


function animateGallery(){

  currentX += (targetX - currentX) * 0.05;
  currentY += (targetY - currentY) * 0.05;

  gallery.style.transform =
    `translate(${currentX}px, ${currentY}px)`;

  requestAnimationFrame(animateGallery);

}

animateGallery();
/* Newsletter Submit */

document
.querySelector(".newsletter-form")
.addEventListener("submit", e => {

  e.preventDefault();

  alert("Thank you for subscribing!");

  e.target.reset();

});
