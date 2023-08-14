const grid = document.querySelector("#Grid");
let bigSquare = document.createElement('div');
let column = document.createElement('div');
let row = document.createElement('div');

createBigSquare();

function createBigSquare () {
  for (let i = 0; i < 9; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    bigSquare.appendChild(square);
  }
}

grid.appendChild(bigSquare);
bigSquare.classList.add('bigSquare');