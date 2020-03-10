/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdown_menu() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.global-dropbtn')) {
      var dropdowns = document.getElementsByClassName("global-dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 

document.querySelector(".global-dropdown-content").addEventListener("click", () => {
  document.querySelector(".note-container").classList.remove("note-container-state-hidden");
  document.querySelector(".note-container").classList.add("note-container-state-visible");
  document.querySelector(".github-fork-ribbon").classList.remove("github-fork-ribbon-state-visible");
  document.querySelector(".github-fork-ribbon").classList.add("github-fork-ribbon-state-hidden");
  document.querySelector(".global-clicking-space-1").classList.remove("global-clicking-space-1-state-visible");
  document.querySelector(".global-clicking-space-1").classList.add("global-clicking-space-1-state-hidden");
  document.querySelector(".global-theme-selector").classList.remove("global-theme-selector-state-visible");
        document.querySelector(".global-theme-selector").classList.add("global-theme-selector-state-hidden");
});


function get_iframe(id) {
    window.link = document.getElementById(id).getAttribute("link");
    create_iframe();
};

function create_iframe() {
    var ifrm = document.getElementById('note_iframe');
    ifrm.setAttribute("src", window.link);
};

