function tampilkanMenu() {
  const menuMobile = document.getElementById("menu-mobile");
  const tombolBars = document.querySelector(".tombol-bars");
  const ikonMenu = document.getElementById("ikon-menu");

  menuMobile.classList.toggle("tampil");

  if (menuMobile.classList.contains("tampil")) {
    ikonMenu.className = "fas fa-times";
    tombolBars.classList.add("aktif");
  } else {
    ikonMenu.className = "fas fa-bars";
    tombolBars.classList.remove("aktif");
  }
}

document.addEventListener("click", function (event) {
  const menuMobile = document.getElementById("menu-mobile");
  const tombolBars = document.querySelector(".tombol-bars");
  const ikonMenu = document.getElementById("ikon-menu");

  if (
    !menuMobile.contains(event.target) &&
    !tombolBars.contains(event.target)
  ) {
    menuMobile.classList.remove("tampil");
    ikonMenu.className = "fas fa-bars";
    tombolBars.classList.remove("aktif");
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    const menuMobile = document.getElementById("menu-mobile");
    const tombolBars = document.querySelector(".tombol-bars");
    const ikonMenu = document.getElementById("ikon-menu");

    menuMobile.classList.remove("tampil");
    ikonMenu.className = "fas fa-bars";
    tombolBars.classList.remove("aktif");
  }
});
