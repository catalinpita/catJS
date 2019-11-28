let person = {
  getName: function () {
    return 'Dragos Iordache';
  },
  getAge: function () {
    return 32;
  },
  getPet: function () {
    return 'Spot the dog';
  }
}


const accessor = (methodSuffix) => {
  let methodName = `get${methodSuffix}`;
  return person[methodName]();
}

// console.log(accessor('Name'));
// console.log(accessor('Age'));
// console.log(accessor('Pet'));
let firstName = accessor('Name');
console.warn(`Eu sunt ${firstName.split(" ")[0]}`);

console.warn(Math.abs(28 - accessor(`Age`)));
let age = (new Date()).getFullYear() - accessor('Age');
console.warn(age);

console.log(`Ma numesc ${firstName} si am ${accessor('Age')} ani fiind nascut acum ${age} ani.`);
/************************************/
let dateBuilder = [
  function () {
    return '2019';
  },
  function () {
    return 'today';
  }

]
console.log(dateBuilder[1]());
/************************************/
let compound = (f, g, x) => {
  return f(g(x));
};

let fog = (f, g, x) => {
  return compound(f, g, x);
}


let f1 = function increase(x) {
  return x + 1;
};
let f2 = function toSquare(x) {
  return x * x;
};

// let fog =  compound(f1,f2){
//   return 
// }
console.log(fog(f2, f1, 3));
