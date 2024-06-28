function createGrid(size) {
    for (let i=1; i<=size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j=1; j<=size; j++) {
            let column = document.createElement("div");
            column.classList.add("square");
            row.appendChild(column);
        };
        grid.appendChild(row);
    }
}

addEventListener("DOMContentLoaded", (event) => {
    let sizeGrid = 16;
    let grid = document.querySelector("#grid");
    createGrid(sizeGrid);
});