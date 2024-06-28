function createGrid(size) {
    let grid = document.querySelector("#grid");
    for (let i=1; i<=size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j=1; j<=size; j++) {
            let column = document.createElement("div");
            column.classList.add("square");
            column.style.width = `calc(80vmin / ${size})`;
            column.style.height = `calc(80vmin / ${size})`;
            row.appendChild(column);
        };
        grid.appendChild(row);
    }
}

function selectSize() {
    let input = prompt("How many squares per side should the grid have (a number between 1 and 100)?");
    if (Number(input) > 0 && Number(input) < 101) {
        let grid = document.querySelector("#grid");
        while (grid.firstChild) {
            grid.removeChild(grid.lastChild);
        };
        createGrid(Number(input));
    };
}

addEventListener("DOMContentLoaded", (event) => {
    let sizeGrid = 16;
    let button = document.querySelector("button");
    createGrid(sizeGrid);
    button.addEventListener("click", selectSize);
});