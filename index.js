const infoButton = document.getElementById("info");
const volumeButton = document.getElementById("volume");

// --- info button ----------------------------------------------------

infoButton.addEventListener("click", (event) => {
  if (event.target.src.includes("images/infoonhover.png")) {
    event.target.src = "images/infooffhover.png";
    // display black overlay
    // display info box
  } else if (event.target.src.includes("images/infooffhover.png")) {
    event.target.src = "images/infoonhover.png";
    // remove info box
    // remove black overlay
  }
});

infoButton.addEventListener("mouseover", (event) => {
  if (event.target.src.includes("images/infoon.png")) {
    event.target.src = "images/infoonhover.png";
  } else if (event.target.src.includes("images/infooff.png")) {
    event.target.src = "images/infooffhover.png";
  }
});

infoButton.addEventListener("mouseout", (event) => {
  if (event.target.src.includes("images/infoonhover.png")) {
    event.target.src = "images/infoon.png";
  } else if (event.target.src.includes("images/infooffhover.png")) {
    event.target.src = "images/infooff.png";
  }
});

// --- volume button ---------------------------------------------------

volumeButton.addEventListener("click", (event) => {
  if (event.target.src.includes("images/soundonhover.png")) {
    event.target.src = "images/soundoffhover.png";
    // turn off bgm
  } else if (event.target.src.includes("images/soundoffhover.png")) {
    event.target.src = "images/soundonhover.png";
    // turn on bgm
  }
});

volumeButton.addEventListener("mouseover", (event) => {
  if (event.target.src.includes("images/soundon.png")) {
    event.target.src = "images/soundonhover.png";
  } else if (event.target.src.includes("images/soundoff.png")) {
    event.target.src = "images/soundoffhover.png";
  }
});

volumeButton.addEventListener("mouseout", (event) => {
  if (event.target.src.includes("images/soundonhover.png")) {
    event.target.src = "images/soundon.png";
  } else if (event.target.src.includes("images/soundoffhover.png")) {
    event.target.src = "images/soundoff.png";
  }
});
