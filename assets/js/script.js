'use strict';

const addEventListenerToElement = function (element, eventType, callback) {
  if (element.length > 1) {
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener(eventType, callback);
    }
  } else {
    element.addEventListener(eventType, callback);
  }
};

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle("active");
};

addEventListenerToElement(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
};

addEventListenerToElement(navbarLinks, "click", closeNavbar);

const header = document.querySelector("[data-header]");

const activateHeader = function () {
  if (window.scrollY > 300) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

addEventListenerToElement(window, "scroll", activateHeader);

/**
 * Toggle active class on "Add to Favorites" buttons
 */
const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

const toggleActiveClass = function () {
  this.classList.toggle("active");
};

addEventListenerToElement(addToFavBtns, "click", toggleActiveClass);

/**
 * Scroll reveal effect
 */
const sections = document.querySelectorAll("[data-section]");

const revealOnScroll = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
};

revealOnScroll();

addEventListenerToElement(window, "scroll", revealOnScroll);
