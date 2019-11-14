
var currentYear = new Date().getFullYear();

// Creeaza un obiect numit person 
// Obiectul sa contina urmatoarele proprietati: firstName, lastName, email, birthYear, pets, zipCode. 

var person = {
  firstName: 'Cata',
  lastName: 'Pita',
  email: 'dub@gmail.com',
  birthYear: 7486,
  pets: [],
  zipCode: '100xxx'
}

// Proprietatea pets sa contina un array de obiecte cu trei pozitii. 
// Obiectele din pets sa contina urmatoarele proprietati: name, species, age. 

var Baloo = {
  name: 'Baalu', species: 'urs', age: 28
}

var Kaa = {
  name: 'Kaa', species: 'sarpe', age: 5
}

var Shir = {
  name: 'Shir', species: 'tigru', age: 7
}

person.pets.push(Baloo);
person.pets.push(Kaa);
person.pets.push(Shir);

// Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale”. Nu uita de proprietatea length a arrayului pets. 
console.log(`Numele meu este: ${person.lastName} si ${person.firstName} si am ${person.pets.length} animale.`);

// Afiseaza propozitia: “Am acelasi email din copilarie: xxx”.
console.log(`Am acelasi email din copilarie: ${person.email}`);

// Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”
var anAnimal = person.pets[Math.ceil(Math.random() * (person.pets.length)) - 1];
console.log(`Unul din cele ${person.pets.length} animale ale mele este ${anAnimal.species} si are ${anAnimal.age} ani.`);

// Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.
console.log(`Animalul ${person.pets[2].name} s-a nascut in anul ${currentYear - person.pets[2].age}`);

// Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0. Foloseste anul curent. 
var difference = person.birthYear - (currentYear - person.pets[0].age);

// Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName. 
var firstAnimalName = person.pets[0].name;

// Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani”.
console.log(`Intre ${person.firstName} si ${firstAnimalName} este o diferenta de ${difference} ani`);

// In documentul HTML creeaza o lista neordonata <ul> cu 5 elemente goale <li>. 
// Fiecare li sa aiba un id: prop01, prop02… etc 


// Folosind metoda document.getElementById() afiseaza urmatoarele 5 afirmatii despre obiectul person. 

// Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)
document.getElementById(`prop01`).innerHTML=`${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name}, ${person.pets[2].name} locuiesc toti in aceeasi casa :-)))`;

// Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2 
document.getElementById(`prop02`).innerHTML=`Diferenta de varsta intre ${person.pets[0].name} si ${person.pets[2].name} este ${Math.abs(person.pets[0].age-person.pets[2].age)} de ani.`;

// Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”
document.getElementById(`prop03`).innerHTML=`Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}.`;

// Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea. 
document.getElementById(`prop04`).innerHTML=`Animalele mele s-au nascut in ${currentYear-person.pets[0].age}, ${currentYear-person.pets[1].age}, respectiv ${currentYear-person.pets[2].age}`;
// Folosirea variabilelor este optionala dar incurajata. 
document.getElementById('prop05').innerText=`${person.pets[2].name}, ${person.pets[1].name}, ${person.pets[0].name} niste animale iubite`;