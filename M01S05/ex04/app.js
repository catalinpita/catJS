var calculateRectangleArea = (L, l) => { return L * l };

let longWall = calculateRectangleArea(6, 2.5);
let shortWall = calculateRectangleArea(4, 2.5);
let totalSurface = (2 * longWall) + (2 * shortWall);

let doorSurface = calculateRectangleArea(2.2, 1.5);
let windowsSurface = calculateRectangleArea(2.1, 5);

let wallPaperSurface = totalSurface - doorSurface - windowsSurface;

console.warn(wallPaperSurface);

var calculateSquareArea = (l) => { return calculateRectangleArea(l, l); };