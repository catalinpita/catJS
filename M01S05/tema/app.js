function surfaceCalculator(L, l, h) {
  var surface = 0;
  switch (arguments.length) {
    case 1: surface = Math.pow(L, 2); break;
    case 2: surface = L * l; break;
    case 3: surface = L * l * h; break;
  }
  return surface;
}

console.log(surfaceCalculator(2));
console.log(surfaceCalculator(2, 3));
console.log(surfaceCalculator(2, 3, 4));


/********************************/

const calculateCircleArea = (radius) => { return Math.PI * Math.pow(radius, 2) };
console.log(`Suprafata cerc=${calculateCircleArea(2)}`);
console.log(`Suprafata cerc=${calculateCircleArea(20)}`);
console.log(`Suprafata cerc=${calculateCircleArea(16)}`);

/******/

let pet = {
  getName: function () { return 'Vio'; },

  getSpecies: function () { return 'Ammiba'; },

  getAge: function () { return 20; }
}

console.log(`${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()}`);
console.log(`${pet['getName']()} este ${pet['getSpecies']()} si are ${pet['getAge']()}`);
