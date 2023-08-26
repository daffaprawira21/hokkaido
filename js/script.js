const images = document.querySelectorAll(".slider");

let i = 0;

setInterval(function () {
  if (i == 0) {
    images[i].style.display = "block";
    images[i].style.width = "100%";
  } else if (i == images.length) {
    images[i - 1].style.display = "none";
    images[0].style.display = "block";
    images[0].style.width = "100%";
    i = 0;
  } else {
    images[i - 1].style.display = "none";
    images[i].style.display = "block";
    images[i].style.width = "100%";
  }
  i++;
}, 2000);
