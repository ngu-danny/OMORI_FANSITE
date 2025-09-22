const infoButton = document.getElementById("info");
const volumeButton = document.getElementById("volume");
const whiteSpaceAudio = document.getElementById("white-space");
const blackSpaceAudio = document.getElementById("black-space");

function showTextBox() {
  let textbox = document.getElementById("textbox");
  textbox.hidden = false;
  textbox.classList.add("animate-open");
}

function hideTextBox() {
  let textbox = document.getElementById("textbox");
  textbox.classList.remove("animate-open");
  textbox.classList.add("animate-close");
  textbox.addEventListener(
    "animationend",
    () => {
      textbox.hidden = true;
      textbox.classList.remove("animate-close");
    },
    { once: true }
  );
}

// --- info button ----------------------------------------------------
infoButton.addEventListener("click", (event) => {
  if (event.target.src.includes("images/infoonhover.png")) {
    event.target.src = "images/infooffhover.png";
    showTextBox();
    // add text
  } else if (event.target.src.includes("images/infooffhover.png")) {
    event.target.src = "images/infoonhover.png";
    // remove text
    hideTextBox();
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
// TO DO: add black space difference
volumeButton.addEventListener("click", (event) => {
  if (event.target.src.includes("images/soundonhover.png")) {
    event.target.src = "images/soundoffhover.png";
    whiteSpaceAudio.pause();
  } else if (event.target.src.includes("images/soundoffhover.png")) {
    event.target.src = "images/soundonhover.png";
    whiteSpaceAudio.play();
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
