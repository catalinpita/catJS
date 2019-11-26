function calculateRectangeArea(L, l) {
  return L * l;
}

console.warn('###########');
let rectangle1 = calculateRectangeArea(5, 3);
let rectangle2 = calculateRectangeArea(3, 2);
console.log(rectangle1 + rectangle2);

console.log(calculateRectangeArea(3*3));