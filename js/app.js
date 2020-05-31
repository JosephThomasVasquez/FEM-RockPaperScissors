const score = document.querySelector(".score-value");
const bodyHTML = document.querySelector("body");

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

const rules = () => {
    const rulesElement = document.createElement('div');
    bodyHTML.appendChild(rulesElement);
    rulesElement.classList.add('rules-container');
    const rulesBtn = document.createElement('button');
    rulesElement.appendChild(rulesBtn);
    rulesBtn.innerText = 'RULES';
    rulesBtn.classList.add('rules-btn');
}

rules();






// localStorage Solution

// Get localStorage score
//localStorage.getItem('rpsScore');

// Set localStorage score
//localStorage.setItem('rpsScore', `${score.innerHTML}`);

// Remove key from localStorage
//localStorage.removeItem('rpsScore');