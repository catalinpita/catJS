var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwnewr: false,
  skills: ['html', 'javascript', 'css', 'java', 'c++', 'node', 'jquery'],
  friends: [{
    name: 'Larry',
    surname: 'Larryson',
    age: 30
  },
  {
    name: 'Steven',
    surname: 'Stevenson',
    age: 31
  },
  {
    name: 'Carol',
    surname: 'Carolson',
    age: 29
  }
  ]
}

// Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului.
for (let index = 0; index < person.skills.length; index += 2) {
  console.log(person.skills[index]);
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
//  In mod similar, afiseaza skillurile care NU incep cu j.
for (let index = 0; index < person.skills.length; index++) {
  if (person.skills[index].charAt(0) !== 'j')
    console.log(person.skills[index]);
}
//  Folosind un for afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."
var friends = 'Prietenii mei se numesc ';
for (let index = 0; index < person.friends.length; index++) {
  friends += person.friends[index].name + ' ,';
}
;
console.log(friends.substring(0, friends.lastIndexOf(' ,')) + '.');
//  Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.
var totalAge = 0;
for (let index = 0; index < person.friends.length; index++) {
  totalAge += person.friends[index].age;
}
console.log(`Pietenii au ${totalAge} ani.`);
//  Folosind un for, afiseaza suma anilor de nastere a persoanelor. 
console.log(`Suma anilor de nastere a prietenilor este ${person.friends.length * parseInt(2019) - totalAge} ani.`);
//  Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends doar daca aceasta este mai mare de 2 ani.
for (let index = 0; index < person.friends.length; index++) {
  if (person.age - person.friends[index].age > 2)
    console.log(`${person.name} este cu peste 2 ani mai mare decat ${person.friends[index].name}`);
}
//  Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara. 
for (let index = 0; index < person.friends.length; index++) {
  if (person.age - person.friends[index].age % 2 !== 0)
    console.log(`Diferenta de varsta intre ${person.name} si ${person.friends[index].name} este impara`);
}
//  Folosind proprietatea length a arrayului skills si o bucla for, afiseaza in ordine inversa elementele arrayului skills. Atentie, va trebui sa numeri invers, de la length la 0.
console.log(`Pritenii in ordine inversa`);
for (let index =  person.friends.length-1; index >=0; index--) {
 
    console.log(person.friends[index].name);
}