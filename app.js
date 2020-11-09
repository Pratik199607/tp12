// import Typed from "typed.js";
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

//Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Typing Effect
var options = {
  strings: [
    "Hi, I am Pratik Bapat.",
    "I am a Quick Learner.",
    "I Love to Develope.",
    "I Love myself",
  ],
  backSpeed: 50,
  typeSpeed: 50,
  loop: true,
  showCursor: false,
  smartBackspace: true,
  // fadeOut: true,
};
var typed = new Typed(".elements", options);
