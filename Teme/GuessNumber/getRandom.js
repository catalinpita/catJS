const defaultUserName = "Anonymous";
var userName = prompt("Sub ce nume joci", defaultUserName)||defaultUserName;
var user = getFromLocalStorage(userName);

var message1 = `Bine ai intrat in joc <b>${userName}</b>!!!`;
var message2 = `Bine ai revenit  <b>${userName}</b>!!!`;


document.getElementById('userEntrance').innerHTML =( (user.maxLevel == 0) ? message1 : message2);

var message3=`Recordul tau este de <b>${user.maxPoints}</b> puncte obtinute in <b>${user.maxLevel}</b> nivele!`;
document.getElementById('userPerformance').innerHTML = user.maxLevel == 0 ? "" : message3;

var isStarted;
var cheated, cheatedLevel;
var maxTries, upperRange;
var numberToGuess;
var triedNumbers;
var tryNumber;
var level;
var settingsForm = document.getElementById('settingsForm');
var gameForm = document.getElementById('gameForm');

var maxTriesInput = document.getElementById('maxTries');
var upperRangeInput = document.getElementById('upperRange');

var currentTryInput = document.getElementById('currentTry');

var startButton = document.getElementById('startButton');
var tryButton = document.getElementById('tryButton');
var cheatButton = document.getElementById('cheatButton');

settingsForm.addEventListener("submit", startFunction);

gameForm.addEventListener("submit", tryFunction);
cheatButton.addEventListener("click", cheatFunction);


initFunction();

/**********************************************************************************************/
// numberToGuess = Math.random() * (upperRange + 1); //(Math.random() * ((max - min) + 1)) + min.
function startFunction(evt) {
  if (isStarted === false) {

    maxTries = maxTriesInput.value;
    upperRange = parseInt(upperRangeInput.value);
    numberToGuess = Math.ceil(Math.random() * upperRange);
    triedNumbers = [];
    isStarted = true;
    tryNumber = 1;

    document.getElementById('response').innerHTML = '';
    document.getElementById('numberOfTry').innerText = '1';
    document.getElementById('yourTries').innerText = '';

    enableControlsByState(isStarted);

  }
  evt.preventDefault();
}

/**********************************************************************************************/
function tryFunction(evt) {

  const myTry = parseInt(currentTryInput.value);

  if (isStarted === true) {
    if (myTry > upperRange) {
      alert(`Psssst ma gandesc la un numar intre 0 si ${upperRange}.`);

    } else if (notTriedYet(triedNumbers, myTry)) {
      if (myTry === numberToGuess) {
        document.getElementById('response').innerHTML = `Bravo, ai ghicit! <b>${myTry}</b> este numarul la care m-am gandit.`;
        isStarted = false;
        enableControlsByState(isStarted);
        level++;
        updateUser(user, level);
        document.getElementById('level').innerText = level;
      } else {
        document.getElementById('response').innerHTML = `Numarul <b>${myTry}</b> este mai <b>${(myTry < numberToGuess) ? 'mic' : 'mare'}</b> decat cel la care ma gandesc.`;

        if (++tryNumber > maxTries) {
          document.getElementById('response').innerHTML = `Ai terminat munitia!!! eu ma gandeam la numarul ${numberToGuess}.`;
          document.getElementById('numberOfTry').innerText = '...';

          isStarted = false;
          enableControlsByState(isStarted);
        }
        triedNumbers.push(myTry);
      }
      document.getElementById('numberOfTry').innerText = tryNumber;
      document.getElementById('yourTries').innerText = triedNumbers;
    } else {
      alert(`Ai mai incercat numarul ${myTry}.`);
    }
  }

  evt.preventDefault();
}

/**********************************************************************************************/
function cheatFunction(evt) {


  if (cheated === false || level === cheatedLevel) {
    alert(`Si vântul shoptea.... ${numberToGuess}.`);
    cheated = true;
    cheatedLevel = level;
  } else {
    cheated = true;
    alert('Hehe! Sarpele zburator o zi zboara una nu, astzai nu mai zboara. Incearca poimâine!');
    isStarted = false;
    level = 1;
    document.getElementById('yourTries').innerText += ' pâna la urma ai trisat :~))';
    document.getElementById('level').innerText = level;
    enableControlsByState(isStarted)
  }

  evt.preventDefault();
}

/**********************************************************************************************/
function initFunction() {
  level = 0;
  cheatedLevel = 0;
  isStarted = false;
  cheated = false;
  maxTries = 0;
  upperRange = 0;
  numberToGuess = 0;
  triedNumbers = [];
  tryNumber = 1;

  enableControlsByState(isStarted);
  document.getElementById('response').innerHTML = '';
  document.getElementById('numberOfTry').innerText = '1';
  document.getElementById('yourTries').innerText = '';
  document.getElementById('level').innerText = level;

}

/**********************************************************************************************/
function enableControlsByState(state) {
  if (state === false) {
    startButton.classList.remove('disabled');
    startButton.disabled = false;

    tryButton.classList.add('disabled');
    tryButton.disabled = true;

    cheatButton.classList.add('disabled');
    cheatButton.disabled = true;

    currentTry.disabled = true;
    maxTriesInput.disabled = false;
    upperRangeInput.disabled = false;
  } else {
    startButton.classList.add('disabled');
    startButton.disabled = true;

    tryButton.classList.remove('disabled');
    tryButton.disabled = false;

    cheatButton.classList.remove('disabled');
    cheatButton.disabled = false;

    currentTry.disabled = false;
    maxTriesInput.disabled = true;
    upperRangeInput.disabled = true;
  }
}

/**********************************************************************************************/
function notTriedYet(triedNumbers, myTry) {
  for (index = 0; index < triedNumbers.length; index++)
    if (myTry === parseInt(triedNumbers[index]))
      return false;
  return true;
}

/**********************************************************************************************/

function persistToLocalStorage(user) {
  localStorage.setItem("guessNumber>" + user.name, JSON.stringify(user));
}

function getFromLocalStorage(userName) {

  var newUser = {
    name: userName, maxPoints: 0, maxLevel: 0
  };
  var userData = localStorage.getItem("guessNumber>" + userName);
  return userData != null ? JSON.parse(userData) : newUser;

}


function updateUser(user, level) {
  if (level > user.maxLevel) {
    user.maxLevel = level;
  }
  persistToLocalStorage(user);
}