const gridContainer = document.getElementById('gridContainer');
const btnCreateGrid = document.getElementById('btnCreateGrid');

btnCreateGrid.addEventListener('click', () => {
    if (gridContainer.lastChild) {
        removeGrid();
    }
    drawGrid();
});

function drawGrid() {
    for (let squareNum = 1; squareNum <= 25; squareNum++) {
        drawSquare();
    }
}

function drawSquare() {
    let square = document.createElement('div');
    square.classList.add('square');
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

function removeGrid() {
    for (let squareNum = 25; squareNum > 0; squareNum--) {
        gridContainer.removeChild(gridContainer.lastChild);
        console.log(squareNum);
    }
}

