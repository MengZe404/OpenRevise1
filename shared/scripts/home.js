"use strict"

try { 
switchTheme();
} catch (err) {console.error(err)}

document.querySelector(".home-blurb-action").addEventListener("click", () => {
  document.querySelector(".global-hamburger").classList.remove("global-hamburger-state-hidden");
  document.querySelector(".global-hamburger").classList.add("global-hamburger-state-visible");
  document.querySelector(".github-fork-ribbon").classList.remove("github-fork-ribbon-state-visible");
  document.querySelector(".github-fork-ribbon").classList.add("github-fork-ribbon-state-hidden");
});

document.querySelector(".global-dropdown-content").addEventListener("click", () => {
  document.querySelector(".global-hamburger").classList.add("global-hamburger-state-hidden");
  document.querySelector(".global-hamburger").classList.remove("global-hamburger-state-visible");
});

document.querySelector(".global-clicking-space").addEventListener("click", () => {
  document.querySelector(".global-hamburger").classList.add("global-hamburger-state-hidden");
  document.querySelector(".global-hamburger").classList.remove("global-hamburger-state-visible");
  document.querySelector(".github-fork-ribbon").classList.add("github-fork-ribbon-state-visible");
  document.querySelector(".github-fork-ribbon").classList.remove("github-fork-ribbon-state-hidden");
  document.querySelector(".global-clicking-space-1").classList.remove("global-clicking-space-1-state-visible");
  document.querySelector(".global-clicking-space-1").classList.add("global-clicking-space-1-state-hidden");
  document.querySelector(".global-theme-selector").classList.remove("global-theme-selector-state-visible");
  document.querySelector(".global-theme-selector").classList.add("global-theme-selector-state-hidden");
});

document.querySelector(".global-clicking-space-1").addEventListener("click", () => {
  document.querySelector(".global-hamburger").classList.add("global-hamburger-state-hidden");
  document.querySelector(".global-hamburger").classList.remove("global-hamburger-state-visible");
  document.querySelector(".github-fork-ribbon").classList.add("github-fork-ribbon-state-visible");
  document.querySelector(".github-fork-ribbon").classList.remove("github-fork-ribbon-state-hidden");
  document.querySelector(".global-theme-selector").classList.remove("global-theme-selector-state-visible");
  document.querySelector(".global-theme-selector").classList.add("global-theme-selector-state-hidden");
});

document.querySelector(".global-about-page-link").addEventListener("click", () => {
  document.querySelector(".note-container").classList.remove("note-container-state-hidden");
  document.querySelector(".note-container").classList.add("note-container-state-visible");
  document.querySelector(".global-hamburger").classList.add("global-hamburger-state-hidden");
  document.querySelector(".global-hamburger").classList.remove("global-hamburger-state-visible");
  document.querySelector(".github-fork-ribbon").classList.remove("github-fork-ribbon-state-visible");
  document.querySelector(".github-fork-ribbon").classList.add("github-fork-ribbon-state-hidden");
  document.querySelector(".global-clicking-space-1").classList.remove("global-clicking-space-1-state-visible");
  document.querySelector(".global-clicking-space-1").classList.add("global-clicking-space-1-state-hidden");
  document.querySelector(".global-theme-selector").classList.remove("global-theme-selector-state-visible");
  document.querySelector(".global-theme-selector").classList.add("global-theme-selector-state-hidden");
});

document.querySelector(".global-pspapers-page-link").addEventListener("click", () => {
  document.querySelector(".note-container").classList.remove("note-container-state-hidden");
  document.querySelector(".note-container").classList.add("note-container-state-visible");
  document.querySelector(".global-hamburger").classList.add("global-hamburger-state-hidden");
  document.querySelector(".global-hamburger").classList.remove("global-hamburger-state-visible");
  document.querySelector(".github-fork-ribbon").classList.remove("github-fork-ribbon-state-visible");
  document.querySelector(".github-fork-ribbon").classList.add("github-fork-ribbon-state-hidden");
  document.querySelector(".global-clicking-space-1").classList.remove("global-clicking-space-1-state-visible");
  document.querySelector(".global-clicking-space-1").classList.add("global-clicking-space-1-state-hidden");
  document.querySelector(".global-theme-selector").classList.remove("global-theme-selector-state-visible");
  document.querySelector(".global-theme-selector").classList.add("global-theme-selector-state-hidden");
});

// Set the date we're counting down to
const completionDate = new Date("May 1, 2020 00:00:00").getTime();

// Update the count down every 1 second
let countdownInterval = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = completionDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="countdown"
  document.getElementById("countdown").textContent = "We're: " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s from completion...hang tight!";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById(".countdown").textContent = "EXPIRED";
  }
}, 1000);

