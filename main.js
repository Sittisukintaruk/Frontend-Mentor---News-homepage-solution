const menu = document.getElementById("menu");
const close = document.getElementById("close");
const open = document.getElementById("open");
const overlay = document.getElementById("overlay");
const body = document.getElementById("body");
let togle = menu.attributes.getNamedItem("aria-expanded").value === "false";

function openMenu() {
  menu.setAttribute("aria-expanded", "true");
  overlay.classList.toggle("hidden");
  menu.classList.remove("hidden");
  body.style.overflowY = "hidden";
}

function closeMenu() {
  menu.setAttribute("aria-expanded", "false");
  menu.classList.add("hidden");
  overlay.classList.add("hidden");
  body.style.overflowY = "auto";
}

close.addEventListener("click", () => {
  closeMenu();
});

open.addEventListener("click", () => {
  openMenu();
});
