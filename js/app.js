const bodyHTML = document.querySelector("body");
const score = document.querySelector(".score-value");
const pickerContainer = document.querySelector('.picker-container');

console.log(score.innerHTML);


// Create the main div container with the title and score
const createMainContainer = () => {
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('container', 'main');
    bodyHTML.appendChild(mainContainer);

    const titleHTML = document.createElement('div');
    titleHTML.classList.add('title');
    mainContainer.appendChild(titleHTML);


    // Score container div
    const scoreHTML = document.createElement('div');
    scoreHTML.classList.add('score');
    mainContainer.appendChild(scoreHTML);

    const scoreElement = document.createElement('h3');
    scoreElement.classList.add('text-score');
    scoreElement.innerText = 'SCORE';
    scoreHTML.appendChild(scoreElement);
    
    const scoreAmount = document.createElement('h2');
    scoreAmount.classList.add('score-value');
    scoreAmount.innerText = '12';
    scoreHTML.appendChild(scoreAmount);

    // Create h2 Elements and append to Title element
    const createH2Element = (element, name) => {
        const h2HTML = document.createElement(`${element}`);
        h2HTML.classList.add('text-title');
        h2HTML.innerText = `${name}`;
        titleHTML.appendChild(h2HTML);
    };

    createH2Element('h2', 'ROCK');
    createH2Element('h2', 'PAPER');
    createH2Element('h2', 'SCISSORS');


};

createMainContainer();

// Main Game Container is the game board area or play section
const gameContainer = () => {

    const symbols = [{
            name: 'ROCK',
            image: 'images/icon-rock.svg',
            ring: 'rock-ring',
            css: 'symbol-rock',
            value: 0
        },
        {
            name: 'PAPER',
            image: 'images/icon-paper.svg',
            ring: 'paper-ring',
            css: 'symbol-paper',
            value: 1
        },
        {
            name: 'SCISSORS',
            image: 'images/icon-scissors.svg',
            ring: 'scissor-ring',
            css: 'symbol-scissors',
            value: 2
        },
    ];

    const createSymbol = (symbol) => {
        const symbolPick = document.createElement('div');
        const symbolRing = document.createElement('div');
        const symbolImg = document.createElement('img');
        symbolPick.classList.add('pick-symbol', 'col-6');
        symbolRing.classList.add(symbol.ring);
        symbolImg.classList.add(symbol.css);
        symbolImg.src = symbol.image;
        pickerContainer.appendChild(symbolPick);
        symbolPick.appendChild(symbolRing);
        symbolRing.appendChild(symbolImg);

    };

    createSymbol(symbols[0]);
    createSymbol(symbols[2]);
    createSymbol(symbols[1]);

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
        modalContainer.classList.add('modal');
        modalContainer.innerHTML = '<div class="modal-content"><span class="close-btn">X</span><img src="../images/image-rules.svg" class="modal-content"></div>';
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