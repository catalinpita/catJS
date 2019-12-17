
let personForm = document.getElementById('personForm');
let addSkillButtton = document.getElementById('addSkillButton');
let skillInput = document.getElementById('skillInput');
let petSwitch = document.getElementById('hasPets');
let petFieldSet = document.getElementById('pet');
let petNameInput = document.getElementById('petName');
let addPetButton = document.getElementById('addPetButton');

let person;

class Pet {
  constructor(petName) {
    this.name = petName;
  }
};

class Person {
  skills = [];
  pets = [];
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.container = document.getElementById('details');
  }

  render() {
    this.clear();

    this.namePara = document.createElement('p');
    this.surnamePara = document.createElement('p');
    this.agePara = document.createElement('p');

    this.namePara.innerText = this.name;
    this.surnamePara.innerText = this.surname;
    this.agePara.innerText = this.age;

    this.container.appendChild(this.namePara);
    this.container.appendChild(this.surnamePara);
    this.container.appendChild(this.agePara);

    /* */
    this.skillsList = document.createElement('ul');
    this.skills.forEach((skill) => {
      let skillLi = document.createElement('li');
      skillLi.innerText = skill;
      this.skillsList.appendChild(skillLi);
    });
    this.container.appendChild(this.skillsList);

    /* */
    let petsList = document.createElement('ol');
    this.pets.forEach((pet) => {
      let petLi = document.createElement('li');
      petLi.innerText = `Nume: ${pet.name} specie vasta`;
      petsList.appendChild(petLi);
    });
    this.container.appendChild(petsList);
  }

  addSkill(skill) {
    this.skills.push(skill);
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  clear() {
    this.container.innerHTML = "";
  }
}

personForm.addEventListener('submit', (evt) => {
  let inputArray = evt.target.querySelectorAll('input');

  person = new Person(inputArray[0].value, inputArray[1].value, inputArray[2].value);
  person.render();
  evt.preventDefault();
});

addSkillButtton.addEventListener('click', () => {
  let skillName = skillInput.value;

  if (skillName.trim().length > 0) {
    person.addSkill(skillName);
    person.render();
  }
});

addPetButton.addEventListener('click', (evt) => {
  let petName = petNameInput.value;

  if (petName.trim().length > 0) {
    let pet = new Pet(petName);
    person.addPet(pet);
    person.render();
  }
});

petSwitch.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    petFieldSet.style.display = 'block';
  } else {
    petFieldSet.style.display = 'none';
  }
});
