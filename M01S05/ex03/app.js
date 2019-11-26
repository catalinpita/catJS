let calculateRectangleArea = function (L, l) {
  return L * l;
}

console.log('Stiind ca un camp dreptunghiular de hamei produce 25kg/m2 . Ce diferenta de productie este intre un teren de 100m pe 250m si unul de 350m pe 200m');

let field1 = calculateRectangleArea(100, 250);
let filed2 = calculateRectangleArea(350, 250);

let qtyPerSqaureMeter = 25;

let yield1 = field1 * qtyPerSqaureMeter;
let yield2 = field2 * qtyPerSqaureMeter;

let output=Math.abs(yield1-yield2);