"use strict";

const hamburgerBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".nav-phone");
const closeMenu = document.querySelector(".close-menu");

hamburgerBtn.addEventListener("click", function () {
  mobileMenu.style.transform = "translateX(-50%)";
});

closeMenu.addEventListener("click", function () {
  mobileMenu.style.transform = "translateX(-150%)";
});
