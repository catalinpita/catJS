let calculateRectangleArea = function (L, l) {
  return L * l;
}

console.log('Stiind ca un camp dreptunghiular de hamei produce 25kg/m2 . Ce diferenta de productie este intre un teren de 100m pe 250m si unul de 350m pe 200m');

let field1 = calculateRectangleArea(100, 250);
let field2 = calculateRectangleArea(350, 250);

let qtyPerSqaureMeter = 25;

let yield1 = field1 * qtyPerSqaureMeter;
let yield2 = field2 * qtyPerSqaureMeter;

let output = Math.abs(yield1 - yield2);

console.warn('Stiind ca din 10kg de hamei produc 2.5l de bere, cati litri de bere va produce un teren de 400m pe 370m?');

let field3 = calculateRectangleArea(400, 370);
let yield3 = field3 * qtyPerSqaureMeter;
const beerPerKg = 10;
console.log(yield3 / beerPerKg);

/**************************/

console.warn(`Stiind ca un camp dreptunghiular de grau produce 32kg/m2  de faina. Afla si afiseaza cate kilograme de paine produce un camp de 300 pe 200 metri  stiind ca dintr-un kilogram de faina ies 2.5 kg de paine.`);
const flourPerSquareMeter = 32;
let area = calculateRectangleArea(300, 200);
let flour = flourPerSquareMeter * area;
const breadPerFlourKg = 2.5;
let breadKg = flour * breadPerFlourKg;

console.log(breadKg);