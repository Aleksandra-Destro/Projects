"strict";

const colors = [...document.querySelectorAll(".color")];

const gridContainer = document.querySelector(".grid-container");

const cells = document.getElementsByClassName("cell");

const gridSize = document.getElementById("select-grid-size");
const options = document.querySelectorAll(".size");

const clearBtn = document.querySelector(".clear-btn");

const bgColors = [
  "255 51 51",
  "255 240 51",
  "245 111 13",
  "74 207 47",
  "38 229 229",
  "13 62 174",
  "250 79 198",
  "255 255 255",
  "152 152 152",
  "77 48 27",
  "0 0 0 ",
];

const createGrid = function (num) {
  for (j = 0; j < num; j++) {
    let newCell = document.createElement("div");
    newCell.classList.add("cell");
    gridContainer.appendChild(newCell);
  }
};

const clearGrid = function () {
  gridContainer.innerHTML = "";
};

createGrid(8 * 8);

gridSize.addEventListener("change", clearGrid);

gridSize.addEventListener("change", function () {
  removeSelected();
  const optValue = gridSize.value.split("x");
  createGrid(optValue[0] * optValue[1]);
  gridContainer.style.gridTemplateRows = `repeat(${optValue[0]}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${optValue[0]}, 1fr)`;
});

const rgbOutput = function (arr) {
  let r, g, b;
  for (i = 0; i < arr.length; i++) {
    const color = arr[i];
    [r, g, b] = color.split(" ");
    colors[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
};

rgbOutput(bgColors);

const selectColor = function (el) {
  for (const color of colors) {
    color.classList[color === el ? "add" : "remove"]("selected");
  }
};

let draw = false;

colors.forEach((color) => {
  color.addEventListener("click", function () {
    const selectedCol = color.style.backgroundColor;
    for (i = 0; i < cells.length; i++) {
      const cell = cells[i];
      cell.addEventListener("mouseover", function () {
        if (!draw) return;
        cell.style.backgroundColor = selectedCol;
      });
      cell.addEventListener("mousedown", function () {
        cell.style.backgroundColor = selectedCol;
      });
    }
    selectColor(color);
  });
});

window.addEventListener("mousedown", function () {
  draw = true;
});

window.addEventListener("mouseup", function () {
  draw = false;
});

const clearCells = function () {
  let gridCells = document.querySelectorAll(".cell");
  gridCells.forEach((cell) => (cell.style.backgroundColor = ""));
};

const removeSelected = function () {
  colors.forEach((color) => color.classList.remove("selected"));
};

clearBtn.addEventListener("click", function () {
  clearCells();
  removeSelected();
});
