function togglemenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".humburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function myexperience() {
  location.href = "#experience";
}
function myproject() {
  location.href = "#Project";
}
function mycontact() {
  location.href = "#contact";
}
