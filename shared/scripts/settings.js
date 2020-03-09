function setting() {
    document.querySelector(".global-hamburger-items").addEventListener("click", () => {
        document.querySelector(".theme-selector").classList.remove("theme-selector-state-hidden");
        document.querySelector(".theme-selector").classList.add("theme-selector-state-visible");
    })

    document.querySelector(".theme-option").addEventListener("click", () => {
        document.querySelector(".theme-selector").classList.remove("theme-selector-state-visible");
        document.querySelector(".theme-selector").classList.add("theme-selector-state-hidden");
    })
}
