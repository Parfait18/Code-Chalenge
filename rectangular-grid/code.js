/**
 * Don't let the machines win. You are humanity's last hope...
 **/

 const width = parseInt(readline()); // the number of cells on the X axis
 const height = parseInt(readline()); // the number of cells on the Y axis
 const grid = [];
 
 // Read the grid
 for (let i = 0; i < height; i++) {
     const line = readline(); // width characters, each either 0 or .
     grid.push(line);
 }
 
 // Function to find the first node on the right
 function findRight(x, y) {
     for (let i = x + 1; i < width; i++) {
         if (grid[y][i] === '0') {
             return [i, y];
         }
     }
     return [-1, -1];
 }
 
 // Function to find the first node below
 function findDown(x, y) {
     for (let i = y + 1; i < height; i++) {
         if (grid[i][x] === '0') {
             return [x, i];
         }
     }
     return [-1, -1];
 }
 
 // Loop through the grid and find the nodes and their neighbors
 for (let y = 0; y < height; y++) {
     for (let x = 0; x < width; x++) {
         if (grid[y][x] === '0') {
             const [rightX, rightY] = findRight(x, y);
             const [downX, downY] = findDown(x, y);
             console.log(`${x} ${y} ${rightX} ${rightY} ${downX} ${downY}`);
         }
     }
 }
 
