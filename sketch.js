let cards = [];

function setup() {
  noCanvas(); // we don't need a p5 canvas, but p5 will manage JS interactions

  // get all photo cards from your HTML
  let htmlCards = document.querySelectorAll('.photo-card');

  htmlCards.forEach((card, index) => {
    // give each card a tiny random rotation like a real scrapbook
    let rotation = random(-2, 2);
    card.style.transform = `rotate(${rotation}deg)`;

    // add hover animation
    card.addEventListener("mouseenter", () => {
      card.style.transform = `scale(1.03) rotate(0deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `scale(1) rotate(${rotation}deg)`;
    });

    // add p5 click detection
    card.addEventListener("click", () => {
      let video = card.querySelector("img").getAttribute("onclick").split("'")[1];
      openVideoP5(video);
    });
  });
}

// OPEN VIDEO POPUP (p5-triggered)
function openVideoP5(file) {
  let popup = document.getElementById("videoPopup");
  let video = document.getElementById("popupVideo");

  popup.style.display = "flex";
  video.src = file;
  video.play();
}

// CLOSE VIDEO
function closePopup() {
  let popup = document.getElementById("videoPopup");
  let video = document.getElementById("popupVideo");

  popup.style.display = "none";
  video.pause();
  video.src = "";
}
