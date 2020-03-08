"use strict"

document.querySelector(".global-menubar-hamburger").addEventListener("click", () => {
  document.querySelector(".global-hamburger").classList.remove("global-hamburger-state-hidden");
  document.querySelector(".global-hamburger").classList.add("global-hamburger-state-visible");
  document.querySelector(".github-fork-ribbon").classList.remove("github-fork-ribbon-state-visible");
  document.querySelector(".github-fork-ribbon").classList.add("github-fork-ribbon-state-hidden");
});

document.querySelector(".global-hamburger-close").addEventListener("click", () => {
  document.querySelector(".global-hamburger").classList.remove("global-hamburger-state-visible");
  document.querySelector(".global-hamburger").classList.add("global-hamburger-state-hidden");
  document.querySelector(".github-fork-ribbon").classList.remove("github-fork-ribbon-state-hidden");
  document.querySelector(".github-fork-ribbon").classList.add("github-fork-ribbon-state-visible");
});