import Typed from "typed.js";
import confetti from "canvas-confetti";

const typed = new Typed("#element", {
  strings: ["Software Engineering Enthusiast", "IOT Enthusiast", "StartUp Founder Wannabe"],
  typeSpeed: 50,
  loop: true,
});

const appreciateBtn = document.getElementById("sendQuote");

appreciateBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default form submission behavior if it's inside a form
  
  const myCanvas = document.createElement("canvas");
  myCanvas.style.position = "fixed";
  myCanvas.style.inset = 0;
  myCanvas.style.width = "100vw";
  myCanvas.style.height = "100vh";
  myCanvas.style.zIndex = -1;
  document.body.appendChild(myCanvas);

  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 100,
    spread: 160,
  });
});


// Get the avatar image
const avatar = document.querySelector(".avatar");

// Add a hover effect to show the full image when hovered
avatar.addEventListener("mouseenter", () => {
  avatar.classList.add("full-avatar");
});

avatar.addEventListener("mouseleave", () => {
  avatar.classList.remove("full-avatar");
});

const images = document.querySelectorAll('.slideshow img');

let index = 0;
const slideShow = () => {
  images.forEach((image) => {
    image.style.display = 'none';
  });
  index = (index + 1) % images.length;
  images[index].style.display = 'block';
};

// Initially hide all images except the first one
images.forEach((image, i) => {
  if (i !== 0) {
    image.style.display = 'none';
  }
});

// Start slideshow on click
document.getElementById('slideshow').addEventListener('click', slideShow);

// Handle automatic slideshow after every 3 seconds (adjust timing as needed)
setInterval(slideShow, 3000);

