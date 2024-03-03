window.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".carousel");
  const words = carousel.querySelectorAll(".word");

  // Calcula el ancho total del carousel
  let carouselWidth = 0;
  words.forEach(function(word) {
    carouselWidth += word.offsetWidth;
  });

  // Ajusta el ancho del carousel para que las palabras no tengan espacio entre ellas
  carousel.style.width = carouselWidth + "px";
});

