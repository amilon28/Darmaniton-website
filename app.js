"use strict";

const hamburgerBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".nav-phone");
const closeMenu = document.querySelector(".close-menu");

hamburgerBtn.addEventListener("click", function () {
  mobileMenu.style.transform = "translateX(0)";
  hamburgerBtn.style.display = "none";
});

closeMenu.addEventListener("click", function () {
  mobileMenu.style.transform = "translateX(105%)";
  hamburgerBtn.style.display = "block";
});
