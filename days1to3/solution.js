/*
 * ES6 conventions have been dropped for now, 
 * will convert back in future exercises.
 */


// Day 1
function gridSize() {
  var width = GRID[0].length;
  var height = GRID.length;
  return width + " x " + height;
}


// Day 2
function totalCells() {
  var splitStr = gridSize().split(" x ");
  return splitStr[0] * splitStr[1];
}


// Day 3
function lightCell(coord) {
  // var alphaList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // var letter_index = alphaList.indexOf(coord[0].toUpperCase());
  
  var letter_index = (coord.toUpperCase()).charCodeAt(0) - 65;
  var number_index = parseInt(coord.substring(1), 10) - 1;
  return GRID[number_index][letter_index];
}