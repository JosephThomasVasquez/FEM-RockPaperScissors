const bodyHTML = document.querySelector('body');
const scoreHTML = document.querySelector('.text-score');
const pickerContainer = document.querySelector('.picker-container');
const modalContainer = document.querySelector('.modalx');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close-btn');

// Create the main div container with the title and score
const createTitleContainer = () => {

    const scoreAmount = document.createElement('h2');
    scoreAmount.classList.add('score-value');
    scoreAmount.innerText = '12';
    scoreHTML.appendChild(scoreAmount);
};

createTitleContainer();

// Main Game Container is the game board area or play section

    const symbols = [{
         
            name: 'PAPER',
            image: 'images/icon-paper.svg',
            ring: 'paper-ring',
            css: 'symbol-paper',
            value: 0
        },
        {
            name: 'SCISSORS',
            image: 'images/icon-scissors.svg',
            ring: 'scissors-ring',
            css: 'symbol-scissors',
            value: 1
        },
        {
            name: 'ROCK',
            image: 'images/icon-rock.svg',
            ring: 'rock-ring',
            css: 'symbol-rock',
            value: 2
            
        },
    ];

    const symbolSet = [];

    let gameStart = true;
    let playerSelect = false;

    // Create symbols
    const createSymbol = (symbol) => {

        const symbolName = symbol.name.toLowerCase();
            
        const symbolPick = document.createElement('div');
        const symbolRing = document.createElement('div');
        const symbolImg = document.createElement('img');

        // Hover sound effect
        symbolRing.addEventListener('mouseover', e => {

            
            const mouseOverSound = new Audio(`sounds/${symbolName}.mp3`);
            mouseOverSound.loop = false;
            mouseOverSound.play();
            
        });
        
            if (symbolName === 'rock') {
                symbolPick.classList.add(`pick-${symbolName}`);
                symbolPick.classList.add('col-12');
            }else {
                symbolPick.classList.add(`pick-${symbolName}`);
                symbolPick.classList.add('col-6');
            };
            
        
        symbolRing.classList.add(symbol.ring);
        symbolImg.classList.add(symbol.css);
        symbolImg.src = symbol.image;
        pickerContainer.appendChild(symbolPick);
        symbolPick.appendChild(symbolRing);
        symbolRing.appendChild(symbolImg);

        // Player selected Symbol
        if (playerSelect) {
            
        }else if (!playerSelect){
            
            symbolImg.addEventListener('click', e => {
                playerSelect = true;
                symbolSet.push(symbol);
                pickerContainer.innerHTML = '';
                createSymbol(symbol);
                symbolPick.classList.add(`pick-${symbolName}`);
                console.log(symbolSet);
    
            });
        }
        
    };

    // Initialize the game
    const initGame = () => {
        
        playerSelect = false;

        rules();
        score();

        // Creates symbols based on symbols[] Array
        symbols.forEach(name => {
            createSymbol(name);
        });

    };

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
};

// Score Functionality
const score = () => {

    const resetContainer = document.createElement('div');
    const resetScoreButton = document.createElement('button');
    bodyHTML.appendChild(resetContainer);
    resetContainer.appendChild(resetScoreButton);
    resetContainer.classList.add('reset-container');
    resetScoreButton.classList.add('reset-score');
    resetScoreButton.innerHTML = '<i class="fas fa-sync-alt"></i><div class="reset-text">Reset Score</div>';

    bodyHTML.append(resetScoreButton);

    // Reset Score Button
    resetScoreButton.addEventListener('click', () => {
        // Get localStorage score
        localStorage.getItem('rpsScore');

        // Set localStorage score
        localStorage.setItem('rpsScore', `0`);
    });
};

initGame();

// Remove key from localStorage
//localStorage.removeItem('rpsScore');