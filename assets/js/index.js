const openBtn1 = document.getElementById("openModal--1");
const closeBtn1 = document.getElementById("closeModal--1");
const openBtn2 = document.getElementById("openModal--2");
const closeBtn2 = document.getElementById("closeModal--2");
const openBtn3 = document.getElementById("openModal--3");
const closeBtn3 = document.getElementById("closeModal--3");
const modal1 = document.getElementById("modal--1");
const modal2 = document.getElementById("modal--2");
const modal3 = document.getElementById("modal--3");

openBtn1.addEventListener("click", () => {
  modal1.classList.toggle("open");
});

closeBtn1.addEventListener("click", () => {
  modal1.classList.remove("open");
});

openBtn2.addEventListener("click", () => {
  modal2.classList.toggle("open");
});

closeBtn2.addEventListener("click", () => {
  modal2.classList.remove("open");
});

openBtn3.addEventListener("click", () => {
  modal3.classList.toggle("open");
});

closeBtn3.addEventListener("click", () => {
  modal3.classList.remove("open");
});

import scrollPage from "./components/scroll.js";

window.addEventListener('focus', scrollPage());