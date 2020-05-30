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

    const h2HTML = document.createElement('h2');
    h2HTML.classList.add('text-title');
    titleHTML.appendChild(h2HTML);
};

createMainContainer();






// localStorage Solution

// Get localStorage score
//localStorage.getItem('rpsScore');

// Set localStorage score
//localStorage.setItem('rpsScore', `${score.innerHTML}`);

// Remove key from localStorage
//localStorage.removeItem('rpsScore');