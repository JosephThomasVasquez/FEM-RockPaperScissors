const bodyHTML = document.querySelector('body');
const scoreHTML = document.querySelector('.text-score');
const pickerContainer = document.querySelector('.picker-container');
const modalContainer = document.querySelector('.modalx');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close-btn');

const rockSound = new Audio('sounds/rock.mp3');
const paperSound = new Audio('sounds/paper.mp3');
const scissorsSound = new Audio('sounds/scissors.mp3');


// Create the main div container with the title and score
const createTitleContainer = () => {

    const scoreAmount = document.createElement('h2');
    scoreAmount.classList.add('score-value');
    scoreAmount.innerText = '12';
    scoreHTML.appendChild(scoreAmount);
};

createTitleContainer();

// Main Game Container is the game board area or play section
const gameContainer = () => {

    const symbols = [{
            name: 'ROCK',
            image: 'images/icon-rock.svg',
            ring: 'rock-ring',
            css: 'symbol-rock',
            value: 2
        },
        {
            name: 'PAPER',
            image: 'images/icon-paper.svg',
            ring: 'paper-ring',
            css: 'symbol-paper',
            value: 0
        },
        {
            name: 'SCISSORS',
            image: 'images/icon-scissors.svg',
            ring: 'scissor-ring',
            css: 'symbol-scissors',
            value: 1
        },
    ];

    const symbolSet = [];

    // Create symbol
    // Idea is to call function with a single name and assemble the html elements and add to an array from the input of the function
    // Can either create DOM Elements and append or use innerHTML to create the elements on the page.
    // This is using the innerHTML approach
    const createSymbolBtn = name => {
        
        const createHTML = `<div class="pick-${name} col-6"><div class="${name}-ring"><img class="symbol-${name}" src="images/icon-${name}.svg"></div></div>`;
        symbolSet.push(createHTML);

    };

    createSymbolBtn('paper');

    console.log(symbolSet);

    // Update the innetHTML of the picker Container
    //pickerContainer.innerHTML = symbolSet[0];

    let gameStart = true;

    // Initialize the game
    const initGame = () => {

        

        const createSymbol = (symbol) => {
            
            const symbolPick = document.createElement('div');
            const symbolRing = document.createElement('div');
            const symbolImg = document.createElement('img');

            // Hover sound effect
            symbolPick.addEventListener('mouseover', e => {

                const isSymbol = e.target.className

                if (isSymbol === 'rock-ring') {
                    rockSound.play();
                }else if (isSymbol === 'paper-ring') {
                    paperSound.play();
                }else if (isSymbol === 'scissor-ring') {
                    scissorsSound.play();
                };
            });
            
            if (gameStart) {
                if (symbol.value === 0) {
                    symbolPick.classList.add('pick-paper', 'col-6');
                }else if (symbol.value === 1) {
                    symbolPick.classList.add('pick-rock', 'col-6');
                }else if (symbol.value === 2) {
                    symbolPick.classList.add('pick-scissors', 'col-12');
                };
            };
            
            symbolRing.classList.add(symbol.ring);
            symbolImg.classList.add(symbol.css);
            symbolImg.src = symbol.image;
            pickerContainer.appendChild(symbolPick);
            symbolPick.appendChild(symbolRing);
            symbolRing.appendChild(symbolImg);

            symbolImg.addEventListener('click', e => {

                const removeSymbol = e.target.parentNode.parentNode.parentNode.className;
                const removePicked = e.target.parentNode.className;

                if (removeSymbol.includes('picker-container') && removePicked.includes('rock-ring')) {
                    console.log(symbolSet.indexOf(symbol));
                    console.log(removePicked);
                    symbolPick.remove();
                    
                }else if (removeSymbol.includes('picker-container') && removePicked.includes('paper-ring')) {
                    console.log(symbolSet.indexOf(symbol));
                    console.log(removePicked);
                    symbolPick.remove();

                }else if (removeSymbol.includes('picker-container') && removePicked.includes('scissor-ring')) {
                    console.log(symbolSet.indexOf(symbol));
                    console.log(removePicked);
                    symbolPick.remove();

                };
            });
        };
    
        createSymbol(symbols[1]);
        createSymbol(symbols[2]);
        createSymbol(symbols[0]);
    } ;

    initGame();
};

gameContainer();

const rules = () => {
    const rulesElement = document.createElement('div');
    bodyHTML.appendChild(rulesElement);
    rulesElement.classList.add('rules-container');
    const rulesBtn = document.createElement('button');
    rulesElement.appendChild(rulesBtn);
    rulesBtn.innerText = 'RULES';
    rulesBtn.classList.add('rules-btn');

    const modal = () => {
        rulesBtn.addEventListener('click', () => {
        modalContainer.classList.toggle('show-modal');
        });
        
    };

    closeModal.addEventListener('click', () => {
        modalContainer.classList.remove('show-modal');
    });

    modal();
}

rules();

// Reset score button
const resetScoreButton = document.createElement('button');
resetScoreButton.classList.add('reset-score');
resetScoreButton.innerHTML = '<i class="fas fa-sync-alt"></i>';

bodyHTML.append(resetScoreButton);

resetScoreButton.addEventListener('click', () => {
    // Get localStorage score
    localStorage.getItem('rpsScore');

    // Set localStorage score
    localStorage.setItem('rpsScore', `0`);
});


// localStorage Solution

// Get localStorage score
//localStorage.getItem('rpsScore');

// Set localStorage score
//localStorage.setItem('rpsScore', `${score.innerHTML}`);

// Remove key from localStorage
//localStorage.removeItem('rpsScore');