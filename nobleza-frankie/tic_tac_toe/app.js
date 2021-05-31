// MODAL FORM CONTENT //
// DOM Selectors //
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');
const content = document.querySelector('.content');
const formGridSize = document.querySelector('#form-grid-size');
const formFirstMove = document.querySelector('#form-first-move');
const formOpponentSelection = document.querySelector('#form-opponent-selection');
const formSubmitBtn = document.querySelector('.form-submit');

// Button on submit
formSubmitBtn.addEventListener('click', initGame)

// MAIN CONTENT //
// DOM Selectors
const titleDesc = document.querySelector('.title-desc');
const gridContainer = document.querySelector('.grid-container');
const p1Desc = document.querySelectorAll('.content-desc.p1')[0];
const p1Wins = document.querySelectorAll('.content-wins-text.p1')[0];
const p2Title = document.querySelectorAll('.content-title.p2')[0];
const p2Avatar = document.querySelectorAll('.content-avatar.p2')[0];
const p2Desc = document.querySelectorAll('.content-desc.p2')[0];
const p2Wins = document.querySelectorAll('.content-wins-text.p2')[0];
const contentMessage = document.querySelector('.content-message');
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const resetBtn = document.querySelector('.reset');
const totalResetBtn = document.querySelector('.total-reset');

// Global variables
let gridSize;
let xName = "Player 1";
let oName;
let inputX;
let inputO;
let isXFirst;
let isComputerActive;
let isGridLocked = false;
let xWins = 0;
let oWins = 0;
let currentMark; // whether it's X or O's turn
let currentPlayerMessage; // used to display player turn
let turnNo = 0; // used as index for gridHistory
let turnFinished; // to be set later for max gridHistory index for prev/next buttons
let isGameActive = true;
let gridHistory = [];
let gridBoard; // 1d array of grid
let grid2D; // 2d array of grid

// Initialize content after modal submission
function initGame() {
    // Assign variables
    gridSize = formGridSize.value; 
    isXFirst = formFirstMove.value;
    oName = formOpponentSelection.value;
    inputX = "❌";
    inputO = "⭕";
    currentMark = inputX;
    (oName === "Player 2") ? isComputerActive = false : isComputerActive = true;

    // Change text based on inputs
    titleDesc.textContent = ` ${gridSize}x${gridSize} board`;
    p2Title.textContent = oName;
    p1Desc.textContent = `${inputX}'s`;
    if (isComputerActive) {
        p2Avatar.style.backgroundImage = "url('https://images.vexels.com/media/users/3/157318/isolated/preview/2782b0b66efa5815b12c9c637322aff3-desktop-computer-icon-computer-by-vexels.png')"
    };
    p2Desc.textContent = `${inputO}'s`;
    currentPlayerMessage = `${xName} (${inputX})`;

    // Hide/Unhide
    modal.classList.add('hide');
    modalContainer.classList.add('hide');
    content.classList.remove('hide');

    // Creation
    createGrid(gridSize);
    addMainFunction();
    createBoardInstance(); // push empty board to gridHistory
    if (isXFirst == 0) { // switch to let O go first
        playerOMovesFirst();
    };
}

function playerOMovesFirst() {
    switchStates();
        if (isComputerActive) {
            isGridLocked = true;
            setTimeout(function() {
                computerEasy();
                isGridLocked = false;
            }, 1000); // let computer move after animation duration
        }
}

function createGrid(num) {
    // Creates grid board
    gridContainer.innerHTML = createDivs(num);
    let fontSize;
    if (parseInt(num) === 3) {fontSize = 13}
        else if (parseInt(num) === 5) {fontSize = 8}
        else {fontSize = 6};
    gridContainer.style.cssText = `grid-template-columns: repeat(${num}, 1fr); 
                                   grid-template-rows: repeat(${num}, 1fr); 
                                   font-size: ${fontSize}vmin;`
}

function createDivs(num) {
    var divHTML = "";
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            divHTML += `<div class="grid-item hover" data-row="${i}" data-col="${j}"></div>`;
        }
    }
    return divHTML;
};

function addMainFunction() {
    // Add click event and hover class on grid items
    const gridItems = [...gridContainer.querySelectorAll('div')]; // Array/Nodelist of the grid items
    gridItems.forEach(function(item) {
        item.textContent = "";
        item.classList.add('hover'); // add hover class
        item.addEventListener('click', stampMark); // add clickEvent
    });
}

function removeMainFunction() {
    // Remove click event and hover class on grid items
    const gridItems = [...gridContainer.querySelectorAll('div')]; // Array/Nodelist of the grid items
    gridItems.forEach(function(item) {
        item.removeEventListener('click', stampMark); // remove clickEvent
        if (item.textContent === "") { // remove hover class
            item.classList.remove('hover');
        }
    });
}

// Main function
function stampMark() {
    if (isGridLocked) return; // flag to prevent click events during opponent timeout
    // function will run only if textContent contains nothing 
    if (this.textContent === "") {
        // modify board
        this.textContent = currentMark;
        this.classList.toggle('hover');
        turnNo++;

        createBoardInstance(); // create and save board state in 2D array
        checkDraw(); // check if draw
        checkWin(grid2D); // check if win        
        switchStates(); // switch states

        // if game has ended, disable click events, set max prev/next index, show prev/next buttons, 
        // and disable next button
        if (isGameActive === false) {
            removeMainFunction();
            turnFinished = turnNo; // set max array index for prev/next buttons
            previousBtn.classList.remove('hide');
            nextBtn.classList.remove('hide');
            nextBtn.disabled = true;
            nextBtn.classList.add('disabled');
        }

        // If opponent is a computer, do computer's turn
        if (isGameActive === true && isComputerActive === true) {
            contentMessage.textContent = `Computer is thinking`;
            isGridLocked = true; // prevent click events during timeout
            setTimeout(function() {
                computerEasy();
                isGridLocked = false; // set flag to false after timeout
            }, 300);
        }
    }
}

function computerEasy() {
    // computer chooses a grid to mark randomly
    const gridItems = [...gridContainer.querySelectorAll('div')]; // Array/Nodelist of the grid items
    let indexes = [...gridItems.keys()]; // convert gridItems to an array of its index equiv
    let emptyIndexes = indexes.filter(index => gridItems[index].textContent === ""); // create new array of indexes that pass the test
    let selectedIndex = emptyIndexes[Math.floor(Math.random()*emptyIndexes.length)]; // get a random no text gridItem
    let randomGridItem = gridItems[selectedIndex];

    // modify board
    randomGridItem.textContent = currentMark;
    randomGridItem.classList.toggle('hover');
    turnNo++;

    createBoardInstance(); // create and save board state in 2D array
    checkDraw(); // check if draw
    checkWin(grid2D); // check if win        
    switchStates(); // switch states

    // if game has ended, disable click events, set max prev/next index, show prev/next buttons, 
    // and disable next button
    if (isGameActive === false) {
        removeMainFunction();
        turnFinished = turnNo; // set max array index for prev/next buttons
        previousBtn.classList.remove('hide');
        nextBtn.classList.remove('hide');
        nextBtn.disabled = true;
        nextBtn.classList.add('disabled');
    }
}

function createBoardInstance() {
    // create and save board state in 2D array
    gridBoard = createGridArrayInstance(); // get board instance
    grid2D = create2DArray(gridBoard); // create 2D array
    gridHistory.push(grid2D); // push instance into gridHistory
}


function createGridArrayInstance() {
    // takes current board and returns a 1D array
    // e.g. ["", "", "", "", "", "O", "X", "", ""]
    const gridItems = [...gridContainer.querySelectorAll('div')]; // Array/Nodelist of the grid items
    return gridItems.map(function(item) {
        return item.textContent;
    })
}

function create2DArray(arr) {
    // takes 1D array and turns into 2D array
    let arrCopy = [...arr]; // shallow copy
    let newArr = [];
    while(arrCopy.length) {
        newArr.push(arrCopy.splice(0,gridSize)); // create 1D array by splicing 3 items at a time and push into 2D array
    };
    return newArr;
}

function checkWin(grid2D) {
    // checks if win using magic squares algorithm
    // Establish variables
    let xWinEquivalent = gridSize * inputX.codePointAt(0); // Value of n X's in a row
    let oWinEquivalent = gridSize * inputO.codePointAt(0); // Value of n O's in a row
    let piecesOnBoard = 0;
    // check rows
    for (let rx = 0; rx < gridSize; rx++) {
        piecesOnBoard = 0;
        for (let ry = 0; ry < gridSize; ry++) {
            piecesOnBoard += grid2D[rx][ry].codePointAt(0);
        }
        if (piecesOnBoard === xWinEquivalent || piecesOnBoard === oWinEquivalent) {
            endGameOnWin();
            return true;
        }
    }

    // check cols
    for (let cx = 0; cx < gridSize; cx++) {
        piecesOnBoard = 0;
        for (let cy = 0; cy < gridSize; cy++) {
            piecesOnBoard += grid2D[cy][cx].codePointAt(0);
        }
        if (piecesOnBoard === xWinEquivalent || piecesOnBoard === oWinEquivalent) {
            endGameOnWin();
            return true;
        }
    }

    // check first diag
    piecesOnBoard = 0;
    for (let i = 0; i < gridSize; i++) {
        piecesOnBoard += grid2D[i][i].codePointAt(0);
    }
    if (piecesOnBoard === xWinEquivalent || piecesOnBoard === oWinEquivalent) {
        endGameOnWin();
        return true;
    }

    // check second diag
    piecesOnBoard = 0;
    for (let j = 0; j < gridSize; j++) {
        piecesOnBoard += grid2D[(gridSize-1)-j][j].codePointAt(0);
    }
    if (piecesOnBoard === xWinEquivalent || piecesOnBoard === oWinEquivalent) {
        endGameOnWin();
        return true;
    }
}

function endGameOnWin() {
    // ends game and modifies message and win counter
    isGameActive = false;
    contentMessage.textContent = `${currentPlayerMessage} Wins!`;
    (currentMark === inputX) ? xWins++ : oWins++;
    p1Wins.textContent = xWins;
    p2Wins.textContent = oWins;
}

function checkDraw() {
    // ends game if turnNo reaches max gridSize
    if (turnNo === gridSize**2) {
        contentMessage.textContent = `Game ended in a draw!`;
        isGameActive = false;
        return true;
    }
}

function switchStates() {
    // changes currentMark global variable
    if (isGameActive === true) {
        currentMark = (currentMark === inputX) ? inputO : inputX;
        currentPlayerMessage = (currentMark === inputX) ? `${xName} (${inputX})`:`${oName} (${inputO})`;
        contentMessage.textContent = `It's ${currentPlayerMessage}'s turn`
    }
}

// Content buttons: DOM and functions
previousBtn.addEventListener('click', previousBoardState);
nextBtn.addEventListener('click', nextBoardState);
resetBtn.addEventListener('click', resetBoard);
totalResetBtn.addEventListener('click', resetPage);

function previousBoardState() {
    nextBtn.disabled = false;
    nextBtn.classList.remove('disabled');
    previousBtn.classList.remove('disabled');
    turnNo--;
    createBoardStateFrom2DArray();
    if (turnNo === 0) {
        previousBtn.disabled = true;
        previousBtn.classList.add('disabled');
    }
}

function nextBoardState() {
    previousBtn.disabled = false;
    previousBtn.classList.remove('disabled');
    nextBtn.classList.remove('disabled');
    turnNo++;
    createBoardStateFrom2DArray();
    if (turnNo === turnFinished) {
        nextBtn.disabled = true;
        nextBtn.classList.add('disabled');}
}

function createBoardStateFrom2DArray() {
    const gridItems = [...gridContainer.querySelectorAll('div')]; // Array/Nodelist of the grid items
    let arr2D = gridHistory[turnNo]; // access board state based on turnNo(acting as index)

    // modify DOM based on saved board state
    gridItems.forEach(function(item) {
        let row = item.getAttribute('data-row');
        let col = item.getAttribute('data-col');
        item.textContent = arr2D[row][col];
    });
}

function resetBoard() {
    isGameActive = true;
    if (currentMark === inputX) { // if x wins; let o go first next
        playerOMovesFirst();
    } else { // else if o wins; let x go first next
        currentMark = inputX;
        contentMessage.textContent = `Player 1 goes first`;
    }
    turnNo = 0;
    addMainFunction();
    gridHistory = []; // reset gridHistory
    createBoardInstance(); // and push empty board as its first index
    
    previousBtn.classList.add('hide');
    previousBtn.classList.remove('disabled');
    previousBtn.disabled = false;
    nextBtn.classList.add('hide');
}

function resetPage() {
    window.location = window.location;
}