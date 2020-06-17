// Variables and DOM Elements

const bodyHTML = document.querySelector("body");
const scoreHTML = document.querySelector(".text-score");
const pickerContainer = document.querySelector(".picker-container");
const modalContainer = document.querySelector(".modalx");
const modalContent = document.querySelector(".modal-content");
const closeModal = document.querySelector(".close-btn");
const bgImage = document.querySelector(".bg-image");

const playerPickText = document.querySelector(".player-pick");
const cpuPickText = document.querySelector(".cpu-pick");

let symbolSet = [];
let gameStart = true;
let playerSelect = false;
let playerScore = 5;

let getScore = localStorage.getItem("rpsScore");
let incrementScore = parseInt(getScore) + 1;

// Create the main div container with the title and score
const scoreAmount = document.createElement("h2");
scoreAmount.classList.add("score-value");
scoreAmount.innerText = getScore;
scoreHTML.appendChild(scoreAmount);

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

const restartContainer = document.createElement("div");
const winLossText = document.createElement("div");
const playAgainBtn = document.createElement("button");

// Restart Option
const restartOption = () => {
  winLossText.classList.add(`player-status`);

  pickerContainer.appendChild(restartContainer);
  restartContainer.appendChild(winLossText);

  playAgainBtn.classList.add("play-again");
  playAgainBtn.classList.add("symbols-select");
  playAgainBtn.innerText = "Play Again";
  restartContainer.appendChild(playAgainBtn);

  playAgainBtn.addEventListener("click", () => {
    pickerContainer.innerHTML = "";
    initGame();
    location.reload();
  });
};

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
    symbolRing.addEventListener("mouseover", (e) => {});

    symbolImg.addEventListener("click", (e) => {
      const mouseOverSound = new Audio(`sounds/${symbolName}.mp3`);
      mouseOverSound.loop = false;
      mouseOverSound.play();

      playerSelect = true;
      bgImage.style.visibility = "hidden";
      playerPickText.style.visibility = "visible";
      symbolSet.push(symbol);
      pickerContainer.innerHTML = "";
      createSymbol(symbol);
      symbolPick.classList.add(`pick-${symbolName}`);

      console.log(symbolSet);

      setTimeout(() => {
        if (symbolSet.length === 1) {
          restartOption();
          cpu();
        }
      }, 1000);
    });

  } else if (playerSelect) {
    if (symbolPick.classList.contains("col-12")) {
      symbolPick.classList.remove("col-12");
    } else if (symbolPick.classList.contains("col-6")) {
      symbolPick.classList.remove("col-6");
    }
    symbolPick.classList.add("symbols-select");

    let mediaSize = window.matchMedia("(max-width: 600px)").matches;

    mediaSize ? symbolPick.style.transform = "scale(1)" : symbolPick.style.transform = "scale(2)";

    pickerContainer.appendChild(playerPickText);
    pickerContainer.appendChild(cpuPickText);
  }
};

// Initialize the game
const initGame = () => {

  if (getScore === 'NaN' || getScore === 'null') {
    localStorage.setItem('rpsScore', '0');
  };

  getScore;
  scoreAmount.innerText = `${getScore}`;

  bgImage.style.visibility = "visible";
  playerPickText.style.visibility = "hidden";
  cpuPickText.style.visibility = "hidden";

  playerSelect = false;
  symbolSet = [];
  let gameStart = true;

  let playerScore = 5;
  rules();
  score();

  pickerContainer.appendChild(playerPickText);
  pickerContainer.appendChild(cpuPickText);

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
    localStorage.setItem("rpsScore", "0");
    location.reload();
  });
};

// Computer Select Symbol
const cpu = () => {
  cpuPickText.style.visibility = "visible";
  // Random roll thrugh symbols
  const rollSymbol = Math.floor(Math.random() * symbols.length);

  createSymbol(symbols[rollSymbol]);
  symbolSet.push(symbols[rollSymbol]);
  console.log(rollSymbol);
  console.log(symbolSet);

  winConditions();
};

// Check win conditions to see who wins
const winConditions = () => {

  const playerWinEffect = document.querySelector(`.pick-${symbolSet[0].name.toLowerCase()}`);
  const cpuWinEffect = document.querySelector(`.pick-${symbolSet[1].name.toLowerCase()}`);
  const winEffect = document.createElement('span');

  console.log(playerWinEffect.parentElement);
  winEffect.innerHTML = '<div class="symbol-win"></div>';
  playerWinEffect.lastChild.appendChild(winEffect);
  
  console.log(cpuWinEffect);
  // Check which symbol is the winner
  if (symbolSet[0].name === "PAPER") {
    if (symbolSet[1].name === "ROCK") {
      console.log("Player Wins!");
      localStorage.setItem("rpsScore", `${parseInt(getScore) + 1}`);
      scoreAmount.innerText = `${incrementScore}`;
      winLossText.innerText = "You Win";
    } else if (symbolSet[1].name === "SCISSORS") {
      console.log("CPU Wins!");
      winLossText.innerText = "You Lose";
    } else if (symbolSet[1].name === symbolSet[0].name) {
      winLossText.innerText = "Tie!";
    }
  };

  if (symbolSet[0].name === "SCISSORS") {
    if (symbolSet[1].name === "ROCK") {
      console.log("CPU Wins!");
      winLossText.innerText = "You Lose";
    } else if (symbolSet[1].name === "PAPER") {
      console.log("Player Wins!");
      localStorage.setItem("rpsScore", `${parseInt(getScore) + 1}`);
      scoreAmount.innerText = `${incrementScore}`;
      winLossText.innerText = "You Win";
    } else if (symbolSet[1].name === symbolSet[0].name) {
      winLossText.innerText = "Tie!";
    }
  };

  if (symbolSet[0].name === "ROCK") {
    if (symbolSet[1].name === "SCISSORS") {
      console.log("Player Wins!");
      localStorage.setItem("rpsScore", `${parseInt(getScore) + 1}`);
      scoreAmount.innerText = `${incrementScore}`;
      winLossText.innerText = "You Win";
    } else if (symbolSet[1].name === "PAPER") {
      console.log("CPU Wins!");
      winLossText.innerText = "You Lose";
    } else if (symbolSet[1].name === symbolSet[0].name) {
      winLossText.innerText = "Tie!";
    }
  };
};

initGame();
