const gridContainer = document.getElementById('gridContainer');
const btnCreateGrid = document.getElementById('btnCreateGrid');
const popupBG = document.querySelector('.popupBackground');
const warningPopup = document.querySelector('.warningPopup');

let numSquaresOnOneSide;
let numSquaresTotal;

btnCreateGrid.addEventListener('click', () => {
    numSquaresOnOneSide = document.querySelector('input').value;
    numSquaresTotal = numSquaresOnOneSide**2;
    if (gridContainer.hasChildNodes()) {
        removeGrid(gridContainer);
    }
    if (numSquaresOnOneSide >=0 
        && numSquaresOnOneSide <=20
        && Number.isInteger(parseInt(numSquaresOnOneSide))) {
            drawGrid();
    } else {
        displayWarningPopup();
    }
});

function displayWarningPopup() {
    popupBG.classList.add('active');
}
document.addEventListener('click', (e) => {
    if (e.target == popupBG) {
        popupBG.classList.remove('active');
    }
})


function drawGrid() {
    for (let squaresNum = 1; squaresNum <= numSquaresTotal; squaresNum++) {
        drawSquare();
    }
}

function drawSquare() {
    let flexPercentage = 100 / numSquaresOnOneSide;
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.flex = `1 1 ${flexPercentage}%`;
    gridContainer.appendChild(square);
}

function removeGrid(parent) {
    while(parent.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

gridContainer.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains("square")) {
        let square = event.target;
        changeSquareColor(square);
    }
})

function changeSquareColor(square) {
    square.classList.add('squareColored');
}


