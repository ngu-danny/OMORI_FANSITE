const infoButton = document.getElementById("info");
const volumeButton = document.getElementById("volume");
const lightbulb = document.getElementById("lightbulb");
const door = document.getElementById("door");
const sketchbook = document.getElementById("sketchbook");
const laptop = document.getElementById("laptop");
const tissue = document.getElementById("tissue");
const mewo = document.getElementById("mewo");
let eventOngoing = false;

const whiteSpaceAudio = document.getElementById("white-space");
const blackSpaceAudio = document.getElementById("black-space");
whiteSpaceAudio.volume = 0.5;
blackSpaceAudio.volume = 0.5;

// --- textbox -----------------------------------------------------

/**
 * Displays the text box with the given message and sets a listener to remove the text box upon any click.
 * @param {string} message - Message to display in the text box (with HTML formatting).
 */
function showTextBox(message) {
  // prevent any other events from happening
  eventOngoing = true;
  // hide the hovering text box and remove the animation and text
  let hoverBox = document.getElementById("hover");
  document.getElementById("hovertext").innerHTML = "";
  hoverBox.style.animationName = "";
  hoverBox.hidden = true;
  // get the text box, unhide it, add the open animation,
  // and add the text once the animation is done
  let textbox = document.getElementById("textbox");
  textbox.hidden = false;
  textbox.classList.add("animate-open");
  textbox.addEventListener(
    "animationend",
    () => {
      document.getElementById("text").innerHTML = message;
      // add event listener to close text box whenever mouse is clicked AFTER animation is done
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
 * Displays the text box with the given message and sets a listener to change a button's image
 * and remove the text box upon any click.
 * @param {string} message  - Message to display in the text box (with HTML formatting).
 * @param {string} buttonID - ID of button whose image needs to be changed upon any click.
 * @param {string} newImage - Source path of the image the button will change to.
 */
function showTextBoxAndButton(message, buttonID, newImage) {
  // prevent any other events from happening
  eventOngoing = true;
  // get the text box, unhide it, add the open animation,
  // and add the text once the animation is done
  let textbox = document.getElementById("textbox");
  textbox.hidden = false;
  textbox.classList.add("animate-open");
  textbox.addEventListener(
    "animationend",
    () => {
      document.getElementById("text").innerHTML = message;
      // add event listener to close text box whenever mouse is clicked AFTER animation is done
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
 * Hides the message and text box.
 */
function hideTextBox() {
  // remove the text, remove the open animation, and add the close animation
  document.getElementById("text").innerHTML = "";
  let textbox = document.getElementById("textbox");
  textbox.classList.remove("animate-open");
  textbox.classList.add("animate-close");
  // hide the text box, remove the close animation, and allow new events to happen after the animation is done
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
  if (
    (event.target.src.includes("images/infoonhover.png") ||
      event.target.src.includes("images/infoon.png")) &&
    !eventOngoing
  ) {
    // if info is not turned on (yes, there's a confusing naming convention for the files)
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

/**
 * Displays a hovering text box with the given message above the element given.
 * @param {string} message - Message to display in the text box.
 * @param {DOMRect} rect   - The position of the element the textbox should attach to.
 * @param {int} x          - Left offset in px.
 * @param {int} y          - Top offset in px.
 */
function showHoverTextBox(message, rect, x, y) {
  // change position of hovering text box
  let hoverBox = document.getElementById("hover");
  hoverBox.style.left = rect.left + x + "px";
  hoverBox.style.top = rect.top + y + "px";
  // change text, add animation, and unhide
  document.getElementById("hovertext").innerHTML = message;
  hoverBox.style.animationName = "up-and-down";
  hoverBox.hidden = false;
}

/**
 * Hides the hovering text box.
 */
function hideHoverTextBox() {
  let hoverBox = document.getElementById("hover");
  // showTextBox() can remove the hover, so check if it is already hidden or not
  if (!hoverBox.hidden) {
    // remove text and animation and then hide
    document.getElementById("hovertext").innerHTML = "";
    hoverBox.style.animationName = "";
    hoverBox.hidden = true;
  }
}

/**
 * Hides the text box before redirecting to the given URL.
 * @param {string} url - URL to redirect to.
 */
function choiceRedirect(url) {
  // remove the text, remove the open animation, add the close animation,
  // and hide the text box and allow new events to happen once the animation is done
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
      window.location.href = url;
    },
    { once: true }
  );
}

/**
 * Hides the choice box.
 * @param {int} choices - 2 or 3 choices previously given to the user.
 */
function hideChoice(choices) {
  // remove the text, remove the open animation, add the close animation
  let choiceBox = document.getElementById("choice");
  choiceBox.innerHTML = "";
  choiceBox.classList.remove("animate-open-choice-" + choices);
  choiceBox.classList.add("animate-close-choice-" + choices);
  // hide the choice box and remove the close animation after the animation is done
  choiceBox.addEventListener(
    "animationend",
    () => {
      choiceBox.hidden = true;
      choiceBox.classList.remove("animate-close-choice-" + choices);
    },
    { once: true }
  );
}

lightbulb.addEventListener("click", () => {
  if (!eventOngoing) {
    // prevent any other events from happening
    eventOngoing = true;

    // hide the hovering text box and remove the animation
    let hoverBox = document.getElementById("hover");
    hoverBox.style.animationName = "";
    hoverBox.hidden = true;
    // get the text box, unhide it, and add the open animation
    let textbox = document.getElementById("textbox");
    textbox.hidden = false;
    textbox.classList.add("animate-open");

    // get choice box for later
    let choiceBox = document.getElementById("choice");

    // once text box animation is done, display text
    textbox.addEventListener(
      "animationend",
      () => {
        document.getElementById("text").innerHTML =
          "A lightbulb hangs from the ceiling, wherever it is.<br>Look into the lightbulb?";

        // unhide choice box and add the open animation
        choiceBox.hidden = false;
        choiceBox.classList.add("animate-open-choice-2");

        // once choice box animation is done, display text and add event listener
        choiceBox.addEventListener(
          "animationend",
          () => {
            choiceBox.innerHTML =
              "<ul>" +
              '<li id="choice1">YES</li>' +
              '<li id="choice2">NO</li>' +
              "</ul>";

            // check which option was clicked
            choiceBox.addEventListener(
              "click",
              (event) => {
                if (event.target.id == "choice1") {
                  hideChoice(2);
                  showTextBox(
                    "It's pitch black inside. You can't see a thing."
                  );
                } else if (event.target.id == "choice2") {
                  hideChoice(2);
                  setTimeout(hideTextBox, 300);
                }
              },
              { once: true }
            );
            // --- end of option event listener
          },
          { once: true }
        );
        // --- end of choiceBox animationend
      },
      { once: true }
    );
    // --- end of textbox animationend
  }
});

door.addEventListener("click", () => {
  if (!eventOngoing) {
    showTextBox("A white door casts a faint shadow.");
  }
});

door.addEventListener("mouseover", (event) => {
  if (!eventOngoing) {
    showHoverTextBox("DOOR", event.target.getBoundingClientRect(), 10, -100);
  }
});

door.addEventListener("mouseout", () => {
  hideHoverTextBox();
});

sketchbook.addEventListener("mouseover", (event) => {
  if (!eventOngoing) {
    showHoverTextBox(
      "ARTWORKS",
      event.target.getBoundingClientRect(),
      -20,
      -100
    );
  }
});

sketchbook.addEventListener("mouseout", () => {
  hideHoverTextBox();
});

laptop.addEventListener("mouseover", (event) => {
  if (!eventOngoing) {
    showHoverTextBox("BLOG", event.target.getBoundingClientRect(), 10, -100);
  }
});

laptop.addEventListener("mouseout", () => {
  hideHoverTextBox();
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

mewo.addEventListener("mouseover", (event) => {
  if (!eventOngoing) {
    showHoverTextBox("MEWO", event.target.getBoundingClientRect(), 54, -100);
  }
});

mewo.addEventListener("mouseout", () => {
  hideHoverTextBox();
});
