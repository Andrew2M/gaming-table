const navBar = document.querySelector(".navigation");
const menuIcon = navBar.querySelector(".hamburger-icon");
const navLinks = navBar.querySelector(".navigation__links");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("--open");
  navLinks.classList.toggle("--open");

  navLinks.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("navigation__link")) {
      navLinks.classList.remove("--open");
      menuIcon.classList.remove("--open");
    }
  });
});
