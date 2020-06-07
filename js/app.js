const bodyHTML = document.querySelector("body");
const scoreHTML = document.querySelector(".text-score");
const pickerContainer = document.querySelector(".picker-container");
const modalContainer = document.querySelector(".modalx");
const modalContent = document.querySelector(".modal-content");
const closeModal = document.querySelector(".close-btn");

let getScore = localStorage.getItem("rpsScore");

// Create the main div container with the title and score
const scoreAmount = document.createElement("h2");
  scoreAmount.classList.add("score-value");
  scoreAmount.innerText = `${getScore}`;
  scoreHTML.appendChild(scoreAmount);


let setScore = localStorage.setItem("rpsScore", `${1}`);
scoreAmount.innerText = `${setScore}`;

// Symbols[] Array
const symbols = [
  {
    name: "PAPER",
    image: "images/icon-paper.svg",
    ring: "paper-ring",
    css: "symbol-paper",
    value: 0,
  },
  {
    name: "SCISSORS",
    image: "images/icon-scissors.svg",
    ring: "scissors-ring",
    css: "symbol-scissors",
    value: 1,
  },
  {
    name: "ROCK",
    image: "images/icon-rock.svg",
    ring: "rock-ring",
    css: "symbol-rock",
    value: 2,
  },
];

let symbolSet = [];

let gameStart = true;
let playerSelect = false;

// Create symbols
const createSymbol = (symbol) => {
  const symbolName = symbol.name.toLowerCase();

  const symbolPick = document.createElement("div");
  const symbolRing = document.createElement("div");
  const symbolImg = document.createElement("img");

  if (symbolName === "rock") {
    symbolPick.classList.add(`pick-${symbolName}`);
    symbolPick.classList.add("col-12");
  } else {
    symbolPick.classList.add(`pick-${symbolName}`);
    symbolPick.classList.add("col-6");
  }

  symbolRing.classList.add(symbol.ring);
  symbolImg.classList.add(symbol.css);
  symbolImg.src = symbol.image;
  pickerContainer.appendChild(symbolPick);
  symbolPick.appendChild(symbolRing);
  symbolRing.appendChild(symbolImg);

  // Player selected Symbol
  if (!playerSelect) {
    // Hover sound effect
    symbolRing.addEventListener("mouseover", (e) => {
      const mouseOverSound = new Audio(`sounds/${symbolName}.mp3`);
      mouseOverSound.loop = false;
      mouseOverSound.play();
    });

    symbolImg.addEventListener("click", (e) => {
      playerSelect = true;
      symbolSet.push(symbol);
      pickerContainer.innerHTML = "";
      createSymbol(symbol);
      symbolPick.classList.add(`pick-${symbolName}`);

      console.log(symbolSet);

      cpu();
    });
  } else if (playerSelect) {
    symbolPick.style.transform = "scale(2)";
    symbolPick.style.marginTop = "200px";
    symbolPick.classList.add("col-6");
  }
};

// Initialize the game
const initGame = () => {
  scoreAmount.innerText = getScore;
  playerSelect = false;
  symbolSet = [];
  rules();
  score();

  // Creates symbols based on symbols[] Array
  symbols.forEach((name) => {
    createSymbol(name);
  });
};

// Rules function
const rules = () => {
  const rulesElement = document.createElement("div");
  bodyHTML.appendChild(rulesElement);
  rulesElement.classList.add("rules-container");
  const rulesBtn = document.createElement("button");
  rulesElement.appendChild(rulesBtn);
  rulesBtn.innerText = "RULES";
  rulesBtn.classList.add("rules-btn");

  // Modal
  const modal = () => {
    rulesBtn.addEventListener("click", () => {
      modalContainer.classList.toggle("show-modal");
    });
  };

  closeModal.addEventListener("click", () => {
    modalContainer.classList.remove("show-modal");
  });

  modal();
};

// Score Function
const score = () => {
  const resetContainer = document.createElement("div");
  const resetScoreButton = document.createElement("button");
  bodyHTML.appendChild(resetContainer);
  resetContainer.appendChild(resetScoreButton);
  resetContainer.classList.add("reset-container");
  resetScoreButton.classList.add("reset-score");
  resetScoreButton.innerHTML =
    '<i class="fas fa-sync-alt"></i><div class="reset-text">Reset Score</div>';

  bodyHTML.append(resetScoreButton);

  // Reset Score Button
  resetScoreButton.addEventListener("click", () => {
    // Get localStorage score
    localStorage.getItem("rpsScore");

    // Set localStorage score
    localStorage.setItem("rpsScore", `0`);
  });
};

// Computer Select Symbol
const cpu = () => {
  // Random roll thrugh symbols
  const rollSymbol = Math.floor(Math.random() * symbols.length);

  createSymbol(symbols[rollSymbol]);
  symbolSet.push(symbols[rollSymbol]);
  console.log(rollSymbol);
  console.log(symbolSet);
};

//cpu();

// Check conditions to see who wins
const compareSymbol = () => {};

initGame();

// Remove key from localStorage
//localStorage.removeItem('rpsScore');
