const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

let menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;

menu.onclick = () => {
  // menu.classList.toggle("fa-close");
  navlist.classList.toggle("open");
};

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  // if (!menuOpen) {
  //   menuBtn.classList.add("open");
  //   menuOpen = true;
  // } else {
  //   menuBtn.classList.remove("open");
  //   menuOpen = false;
  // }
});

window.onscroll = () => {
  menuBtn.classList.remove("open");
  navlist.classList.remove("open");
};

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
