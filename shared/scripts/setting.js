function setting() {
    document.querySelector(".global-setting-list").addEventListener("click", () => {
        document.querySelector(".global-theme-selector").classList.remove("global-theme-selector-state-hidden");
        document.querySelector(".global-theme-selector").classList.add("global-theme-selector-state-visible");
    })

    document.querySelector(".global-theme-option").addEventListener("click", () => {
        document.querySelector(".global-theme-selector").classList.remove("global-theme-selector-state-visible");
        document.querySelector(".global-theme-selector").classList.add("global-theme-selector-state-hidden");
    })
}
