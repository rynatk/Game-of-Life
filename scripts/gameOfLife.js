// Specify the dimensions of our board structure
var cellsX = 100;
var cellsY = 100;

// The "rules" of Conway's Game of Life:
  // 1. For a living cell, if fewer than 2 living neighbors, cell dies
  // 2. For a living cell, if 2 or 3 neighbors, cell lives
  // 3. For a living cell, if more than 3 neighbors, cell dies
  // 4. For a dead cell, if exactly 3 neighbors, cell comes to life

// Define a function to generate board skeleton based on dimensions
function boardGen(dimY, dimX, item) {
  var arr = [];
  for(i=0; i<rows; i++) {
    arr.push([]);
    arr[i].push(new Array(columns));
    for(j=0; j<columns; j++) {
      arr[i][j] = item;
    }
  }
  return arr;
};

// Instantiate our board skeleton, letting '0' represent a dead cell
var firstIteration = boardGen(cellsX, cellsY, 0);
var secondIteration = [];

// Define a function to count the living neighbors of a cell based on its board position
// Utilizes a switch case to account for cells where there are an incomplete set of neighbors
function countNeighbors(location) {
  var count;
  switch(location) {
    case 'top-left corner':
      //
      break;
    case 'top edge':
      //
      break;
    case 'top-right corner':
      //
      break;
    case 'left edge':
      //
      break;
    case 'right edge':
      //
      break;
    case 'bottom-left corner':
      //
      break;
    case 'bottom edge':
      //
      break;
    case 'bottom-right corner':
      //
      break;
    case 'interior':
      //
      break;
  }
  return count;
};

// Create a function to run through current board state, apply rules, and populate the next iteration of the board
function processBoard(array1, array2) {
  for(var y = 0; y < cellsY; y++){
    for(var x = 0; x < cellsX; x++){
      if(y == 0 && x == 0){  // top-left corner
        countNeighbors('top-left corner');

      } else if(y == 0 && (x > 0 && x < (cellsX - 1))) {  // top edge
        countNeighbors('top edge');

      } else if(y == 0 && x == (cellsX - 1)) {  // top-right corner
        countNeighbors('top-right corner');

      } else if(((y > 0) && (y < (cellsY - 1))) && (x == 0)) {  // left edge
        countNeighbors('left edge');

      } else if((y > 0) && (y < (cellsY - 1)) && (x == (cellsX - 1))) {  // right edge
        countNeighbors('right edge');

      } else if((y == (cellsY - 1)) && (x == 0)) {  // bottom-left corner
        countNeighbors('bottom-left corner');

      } else if((y == (cellsY - 1)) && ((x > 0) && (x < (cellsX - 1)))) {  // bottom edge
        countNeighbors('bottom edge');

      } else if((y == (cellsY - 1)) && (x == (cellsX - 1))) {  // bottom-right corner
        countNeighbors('bottom-right corner');

      } else {  // interior
        countNeighbors('interior');

      }
    }
  }
};
