const infoButton = document.getElementById("info");
const volumeButton = document.getElementById("volume");
const whiteSpaceAudio = document.getElementById("white-space");
const blackSpaceAudio = document.getElementById("black-space");
const lightbulb = document.getElementById("lightbulb");
const door = document.getElementById("door");
const sketchbook = document.getElementById("sketchbook");
const laptop = document.getElementById("laptop");
const tissue = document.getElementById("tissue");
const mewo = document.getElementById("mewo");
let eventOngoing = false;

// --- textbox -----------------------------------------------------

/**
 * Displays the textbox with the given message and sets a listener to remove the textbox upon any click.
 * @param {string} message - Message string to display in textbox (with HTML formatting).
 */
function showTextBox(message) {
  // prevent any other events from happening
  eventOngoing = true;
  // get the textbox, unhide it, add the open animation,
  // and add the text once the animation is done
  let textbox = document.getElementById("textbox");
  textbox.hidden = false;
  textbox.classList.add("animate-open");
  textbox.addEventListener(
    "animationend",
    () => {
      document.getElementById("text").innerHTML = message;
      // add event listener to close textbox whenever mouse is clicked AFTER animation is done
      document.addEventListener(
        "click",
        () => {
          hideTextBox();
        },
        { once: true }
      );
    },
    { once: true }
  );
}

/**
 * Displays the textbox with the given message and sets a listener to change a button's image
 * and remove the textbox upon any click.
 * @param {string} message  - Message string to display in textbox (with HTML formatting).
 * @param {string} buttonID - ID of button whose image needs to be changed upon any click.
 * @param {string} newImage - Source path of the image the button will change to.
 */
function showTextBoxAndButton(message, buttonID, newImage) {
  // prevent any other events from happening
  eventOngoing = true;
  // get the textbox, unhide it, add the open animation,
  // and add the text once the animation is done
  let textbox = document.getElementById("textbox");
  textbox.hidden = false;
  textbox.classList.add("animate-open");
  textbox.addEventListener(
    "animationend",
    () => {
      document.getElementById("text").innerHTML = message;
      // add event listener to close textbox whenever mouse is clicked AFTER animation is done
      document.addEventListener(
        "click",
        () => {
          document.getElementById(buttonID).src = newImage;
          hideTextBox();
        },
        { once: true }
      );
    },
    { once: true }
  );
}

/**
 * Hides the message and textbox.
 */
function hideTextBox() {
  // remove the text, remove the open animation, add the close animation,
  // and hide the textbox and allow new events to happen once the animation is done
  document.getElementById("text").innerHTML = "";
  let textbox = document.getElementById("textbox");
  textbox.classList.remove("animate-open");
  textbox.classList.add("animate-close");
  textbox.addEventListener(
    "animationend",
    () => {
      textbox.hidden = true;
      textbox.classList.remove("animate-close");
      eventOngoing = false;
    },
    { once: true }
  );
}

// --- info button ----------------------------------------------------

infoButton.addEventListener("click", (event) => {
  if (event.target.src.includes("images/infoonhover.png") && !eventOngoing) {
    // if info is not turned on (yes, confusing naming convention for the file)
    event.target.src = "images/infooffhover.png";
    showTextBoxAndButton(
      'An OMORI fansite made by Danny Nguyen.<br>The source code can be found at: <a href="https://github.com/ngu-danny/OMORI_FANSITE">github.com/ngu-danny/OMORI_FANSITE</a>',
      "info-img",
      "images/infoon.png"
    );
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

// --- white space events ------------------------------------------------

lightbulb.addEventListener("click", () => {
  if (!eventOngoing) {
    showTextBox("A lightbulb hangs from the ceiling, wherever it is.");
  }
});

door.addEventListener("click", () => {
  if (!eventOngoing) {
    showTextBox("A white door casts a faint shadow.");
  }
});

tissue.addEventListener("click", () => {
  if (!eventOngoing) {
    showTextBox("A tissue box for wiping all your sorrows away.");
  }
});

mewo.addEventListener("click", () => {
  if (!eventOngoing) {
    showTextBox("Meow? (Waiting for something to happen?)");
  }
});
