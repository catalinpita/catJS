class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  equals(person) {
    return this.name === person.name && this.surname === person.surname;
  }
}

let personsList = [];

const addPersonButton = document.getElementById('addPersonButton');
const removePersonButton = document.getElementById('removePersonButton');
const extractWinnerButton = document.getElementById('extractWinnerButton');

const personsListElement = document.getElementById('personsList');

addPersonButton.addEventListener('click', (evt) => {

  personsList.push(buildPerson());
  displayPersonsList();
  evt.preventDefault();
});

removePersonButton.addEventListener('click', (evt) => {

  const personToRemove = buildPerson();

  let remainingPersonsList = personsList.filter((element) => {
    return !personToRemove.equals(element);
  });
  personsList = remainingPersonsList;
  displayPersonsList();
  evt.preventDefault();
});

extractWinnerButton.addEventListener('click', (evt) => {
  const winnerIndex = getRandomIntInRange(0, personsList.length - 1);
  const winnerText = `Castigatorul este ${personsList[winnerIndex].name} ${personsList[winnerIndex].surname}`;
  document.getElementById('winnerParagraph').innerText = winnerText;
  evt.preventDefault();
});

function buildPerson() {

  const name = document.getElementById('nameInput');
  const surname = document.getElementById('surnameInput');

  return new Person(name.value, surname.value);
}

function displayPersonsList() {
  personsListElement.innerHTML = "";

  personsList.forEach((person) => {
    const liElement = document.createElement('li');
    liElement.innerText = `${person.name} ${person.surname}`;
    personsListElement.appendChild(liElement);
  });
}


function getRandomIntInRange(min, max) {
  const rand = Math.random();
  const inRange = rand * (parseInt(max) - parseInt(min)) + parseInt(min);
  return Math.floor(inRange);
}