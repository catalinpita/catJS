let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
  friends: [{
    name: 'Larry',
    surname: 'Larryson',
    age: 30
  }, {
    name: 'Steven',
    surname: 'Stevenson',
    age: 31
  }, {
    name: 'Carol',
    surname: 'Carolson',
    age: 29
  }]
};

let [skill1, , skill3] = person.skills;
let p1 = document.createElement('p');
p1.innerHTML = `Cunosc ${skill1} si ${skill3}.`
document.body.appendChild(p1);

let [, steven] = person.friends;

let {
  name: friend2Name,
  surname: friend2Surname,
  age: friend2Age
} = steven;

let p2 = document.createElement('p');
p2.innerHTML = `Ma numesc ${friend2Name} ${friend2Surname} si am ${friend2Age} de ani.`
document.body.appendChild(p2);


let { petOwner: hasPet };
let p3 = document.createElement('p');
p3.innerText = `Persoana ${hasPet ? '' : 'nu '}are animale`;

let [larry,carol]=person.friends;
console.log(`Prietenul meu este ${lary.name} ${lary.surname}`);
console.log(`${carol.name} ${carol.surname} este prietena mea`);