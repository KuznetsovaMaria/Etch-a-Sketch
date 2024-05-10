const gridContainer = document.getElementById('gridContainer');
const btnCreateGrid = document.getElementById('btnCreateGrid');

let numSquaresOnOneSide = prompt('How many squares on one side would you like me to draw in your grid?')
let numSquaresTotal  = numSquaresOnOneSide**2;

btnCreateGrid.addEventListener('click', () => {
    if (gridContainer.hasChildNodes()) {
        removeGrid(gridContainer);
    }
    drawGrid();
});

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

gridContainer.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains("square")) {
        let square = event.target;
        changeSquareColor(square);
    }
})

function changeSquareColor(square) {
    square.classList.add('squareColored');
}

function removeGrid(parent) {
    while(parent.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

