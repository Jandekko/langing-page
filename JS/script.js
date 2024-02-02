/*Deixar o cabeçalho transparente */
const header = document.querySelector("header");

/*Deixar o cabeçalho solido */
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 140);
});

/*ativar o menu */
let menu = document.querySelector("#menu-icon");
let nav = document.querySelector(".nav");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  nav.classList.toggle("open");
};

/*Fechar menu*/
window.onscroll = () => {
  menu.classList.remove("bx-x");
  nav.classList.remove("open");
};
