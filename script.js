const gridContainer = document.getElementById('gridContainer');
const btnCreateGrid = document.getElementById('btnCreateGrid');

btnCreateGrid.addEventListener('click', () => {
    drawGrid();
});

function drawGrid() {
    for (let squareNum = 1; squareNum <= 25; squareNum++) {
        drawSquare();
    }
}

function drawSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    gridContainer.appendChild(square);
}




