const bodyHTML = document.querySelector('body');
const scoreHTML = document.querySelector('.text-score');
const pickerContainer = document.querySelector('.picker-container');

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

    let gameStart = true;

    // Initialize the game
    const initGame = () => {

        const symbolSet = [];

        const createSymbol = (symbol) => {
            
            symbolSet.push(symbol);
            
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
        const modalContainer = document.createElement('div');
        //modalContainer.classList.add('modal');
        modalContainer.innerHTML = '<div class="modal-content"><h2 class="rules-h2">RULES</h2><div class="close-btn">X</div><img src="../images/image-rules.svg" class="rules-img"></div>';
        bodyHTML.appendChild(modalContainer);
        rulesBtn.addEventListener('click', () => {
        modalContainer.classList.toggle('show-modal');
        });
        
    };
    modal();
}

rules();

// localStorage Solution

// Get localStorage score
//localStorage.getItem('rpsScore');

// Set localStorage score
//localStorage.setItem('rpsScore', `${score.innerHTML}`);

// Remove key from localStorage
//localStorage.removeItem('rpsScore');