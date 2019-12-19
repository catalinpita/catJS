class Person {
  constructor(name, surname) {
    this.name = toStartingCapitals(name.trim());
    this.surname = surname.trim().toUpperCase();
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
  const newPerson = buildPerson();

  let personAllreadyAdded = false;
  for (let index = 0; index < personsList.length; index++) {
    if (personsList[index].equals(newPerson)) {
      personAllreadyAdded = true;
      break;
    }
  }
  if (!personAllreadyAdded) {
    personsList.push(newPerson);
    displayPersonsList();
  } else {
    alert(`${newPerson.name} ${newPerson.surname} s-a inscris deja`);
  }
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

  if (personsList.length >=2) {
    const winnerIndex = getRandomIntInRange(0, personsList.length - 1);
    const winnerText = `Castigatorul este ${personsList[winnerIndex].name} ${personsList[winnerIndex].surname}`;
    document.getElementById('winnerParagraph').innerText = winnerText;
  } else if (personsList.length === 0) {
    alert("Nimeni e castigator ... daca te tii de glume nici eu nu sunt serios!");
  } else alert("Cum ar fi sa concureze singur si sa nu castige???");

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

const toStartingCapitals = (string) => {
  return string.split(/\s|-/).map((s) => { return s.charAt(0).toUpperCase() + (s.length > 1 ? s.substring(1) : ''); }).reduce((s1, s2) => { return s1 + " " + s2; });
};
