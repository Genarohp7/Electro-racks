// Menu resposive

var btnMenuOpen = document.getElementById("btnMenuOpen"),
  btnMenuClose = document.getElementById("btnMenuClose"),
  menuResponsive = document.getElementById("menuBar"),
  enlaces = document.getElementById("enlaces");

//Click abrir

btnMenuOpen.addEventListener("click", function () {
  menuResponsive.classList.add("active");
});
// click cerar
btnMenuClose.addEventListener("click", function () {
  menuResponsive.classList.remove("active");
});

//cerrar menu con elemento de enlaces

enlaces.addEventListener("click", function () {
  menuResponsive.style.transitionDelay = "0.5s";
  menuResponsive.classList.remove("active");
});
