var typed = new Typed(".auto-type", {
  strings: ["a Designer", "a Programmer", "Raúl"],
  typeSpeed: 200,
  backSpeed: 200,
  looped: 1,
});

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
