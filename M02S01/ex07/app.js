let array1 = [60, 70, 80];
let array2 = [90, 100];

let array4 = [40, 50];
let array3 = [10, 20, 30, ...array4, 60, 70, 80];

let array5 = [101, 102, 103, 104];
let array6 = [106, 107, 108];
let array7 = [...array5, 105, ...array6]; // ?

let array8 = [5, 4, 3, 2, 1];
let array9 = [...array8]; // ?

array8.reverse();
let arrX = arra8.map((number) => {
  return number * 10;
})