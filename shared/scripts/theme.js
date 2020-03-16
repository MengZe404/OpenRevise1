"use strict"
function switchTheme() {
    // localStorage.setItem("OpenReviseTheme", document.getElementById("theme-selector").value);
    if (!localStorage.getItem("OpenReviseTheme")) {
        localStorage.setItem("OpenReviseTheme", "dark");
    }
    document.querySelector(".themeable").classList.remove("theme-dark", "theme-light");
    if(["dark", "light"].indexOf(localStorage.getItem("OpenReviseTheme")) > -1) {
        document.querySelector(".themeable").classList.add("theme-"+localStorage.getItem("OpenReviseTheme"));
    } else {
        console.error("No compatible theme");
        document.querySelector(".themeable").classList.add("theme-dark");
    }
}

// document.getElementById("theme-selector").onchange = (e) => {
//     switchTheme();
// }