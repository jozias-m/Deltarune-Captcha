const GRID_SIZE = 4;
const imageSrc = "image.jpg";
const tiles = [
  0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
];
let correctTiles = [10];
let userTiles = new Set();

const grid = document.getElementById("grid");

function createGrid() {
    grid.innerHTML = "";
    userTiles.clear();

    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");

        const x = -(i % GRID_SIZE) * 100;
        const y = -Math.floor(i / GRID_SIZE) * 100;
        tile.style.backgroundImage = `url(${imageSrc})`;
        tile.style.backgroundSize = `${GRID_SIZE * 100}% ${GRID_SIZE * 100}%`;
        tile.style.backgroundPosition = `${x}% ${y}%`;

        tile.addEventListener("click", () => toggleTile(i, tile));

        grid.appendChild(tile);
        tiles.push(tile);
    }
}
createGrid();

function toggleTile(i, tile) {
    if (userTiles.has(i)) {
        userTiles.delete(i);
        tile.classList.remove("selected");
    } else {
        userTiles.add(i);
        tile.classList.add("selected");
    }
}

document.getElementById("nextBtn").onclick = () => {
    const correct = JSON.stringify([...userTiles].sort()) === JSON.stringify(correctTiles.sort());

    if (correct) {
        alert("Correct");
    } else {
        alert("Incorrect");
    }
};

document.getElementById("refreshBtn").oncli
