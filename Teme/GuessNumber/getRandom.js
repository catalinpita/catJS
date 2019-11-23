const container = document.getElementById('container');
container.style.backgroundColor = '#FFFFFF';
container.style.minHeight = computeMaxHeight();

const secondsToCompleteLevel = 25;
const defaultUserName = "Anonymous";
var userName = prompt("Sub ce nume te joci?", defaultUserName) || defaultUserName;
var user = getFromLocalStorage(userName);

const message1 = `Bine ai intrat in joc <b>${userName}</b>!!!`;
const message2 = `Bine ai revenit  <b>${userName}</b>!!!`;


document.getElementById('userEntrance').innerHTML = ((user.maxLevel == 0) ? message1 : message2);

const message3 = `Recordul tau este de <b>${user.maxPoints}</b> puncte si <b>${user.maxLevel}</b> nivele!`;
document.getElementById('userPerformance').innerHTML = user.maxLevel == 0 ? "" : message3;

var isStarted;
var cheated, cheatedLevel;
var maxTries, upperRange;
var numberToGuess;
var triedNumbers;
var tryNumber;
var level, points, levelStartTime, levelEndTime;
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

var timer;
initFunction();

/**********************************************************************************************/

function startFunction(evt) {

  if (isStarted === false) {

    
 
    document.getElementById('timeProgressBar').classList.remove('bg-danger','bg-warning','bg-success');
    document.getElementById('timeProgressBar').classList.add('invisible','collapsing');
    document.getElementById('timeProgressBar').style = `width: 0%`;
    document.getElementById('timeProgressBar').classList.add('bg-success');
    document.getElementById('timeProgressBar').classList.remove('invisible','collapsing');
        

    document.getElementById('body').style.backgroundColor = getRandomColor();
    levelStartTime = (new Date()).getTime();
    if (level == 0)
      level++;

    document.getElementById('level').innerText = level;
    timer = window.setInterval(displayTimeProgress, 1000);
    maxTries = maxTriesInput.value;
    upperRange = parseInt(upperRangeInput.value);
    numberToGuess = Math.ceil(getRandomIntInRange(0, upperRange));
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
  if (isNaN(myTry)) {
    //nothing to do;
  } else if (isStarted === true) {
    if (myTry > upperRange) {
      alert(`Psssst ma gandesc la un numar intre 0 si ${upperRange}.`);

    } else if (notTriedYet(triedNumbers, myTry)) {
      if (myTry === numberToGuess) {
        document.getElementById('response').innerHTML = `Bravo, ai ghicit! <b>${myTry}</b> este numarul la care m-am gandit.`;
        isStarted = false;
        enableControlsByState(isStarted);
        level++;
        updateUserStorage(user, level, points);
        document.getElementById('level').innerText = level;
        window.clearInterval(timer);
        levelStartTime.levelEndTime = new Date().getTime();
      } else {
        document.getElementById('response').innerHTML = `Numarul <b>${myTry}</b> este mai <b>${(myTry < numberToGuess) ? 'mic' : 'mare'}</b> decat cel la care ma gandesc.`;

        if (++tryNumber > maxTries) {
          document.getElementById('response').innerHTML = `Ai terminat munitia!!! eu ma gandeam la numarul ${numberToGuess}.`;
          document.getElementById('numberOfTry').innerText = '...';

          if (level > 3) {
            level--;
          } else {
            isStarted = false;
          }
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

  if (level === 1 && triedNumbers.length === 0) {
    alert("Serios!?! Chiar asa, din prima? |:-(>)");
  } else if (cheated === false || level === cheatedLevel) {
    alert(`Si vântul shoptea.... ${numberToGuess}.`);
    cheated = true;
    cheatedLevel = level;
  } else {
    if ((getRandomIntInRange(0, 100) % 7) !== 0) {
      const mgsNumber = getRandomIntInRange(0, 100) % 4 === 0 ? numberToGuess : getRandomIntInRange(0, upperRange);
      alert(`Ingeri, strigoi, vârcolaci, poate chiar si niste draci in cor shushoteau.... \n ${mgsNumber}.\n
       De te mint au ba afli cand vei incerca.`);
      cheated = true;
    } else {
      levelStartTime.levelEndTime = new Date().getTime();
      alert(`Hehe! Sarpele zburator o zi zboara una nu, astzai nu mai zboara. Incearca poimâine! \n 
    Butonul insala mereu, uneori jocul, uneori pe tine...\n 
    Pe curand!`);
      isStarted = false;
      level = 1;
      window.clearInterval(timer);
      document.getElementById('yourTries').innerText += ' pâna la urma ai trisat |:~))';
      document.getElementById('level').innerText = level;
      enableControlsByState(isStarted);

    }
  }
  evt.preventDefault();
}

/**********************************************************************************************/
function initFunction() {
  level = 0;
  points = 0;
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

/**********************************************************************************************/
function updateUserStorage(user, level, points) {
  var isLevelRecord = false;
  if (level > user.maxLevel) {
    user.maxLevel = level;
    isLevelRecord = true;
    alert(`Super ${user.name}, ai depasit recordul nivelelor.`)
  }

  if (points > user.maxLevel) {
    user.maxPoints = maxPoints;
    if (!isLevelRecord)
      alert(`De ne crezut! ${user.name}, ai un noou record pentru puncte.`)
  }

  persistToLocalStorage(user);
}
/**********************************************************************************************/

function displayTimeProgress() {

  const secondsElapsed = Math.ceil((new Date().getTime() - levelStartTime) / 1000);

  const preposition = (secondsElapsed % 100 === 0 || (secondsElapsed % 100 > 19)) ? " de" : "";

  document.getElementById('seconds').innerText = (secondsElapsed + preposition);

  var timePercentage = parseInt(Math.floor((secondsElapsed * 100) / secondsToCompleteLevel));
  
  const timeProgressBar = document.getElementById('timeProgressBar');
  timeProgressBar.classList.remove('invisible')
  timeProgressBar.style = `width: ${timePercentage}%`;

  if (timePercentage < 50) {
    timeProgressBar.classList.add('bg-success');
    timeProgressBar.classList.remove('bg-danger','bg-warning');

  } else if (timePercentage < 75) {
    timeProgressBar.classList.add('bg-warning');
  } else if (timePercentage < 100) {

    timeProgressBar.classList.add('bg-danger');
  } else {
    window.clearInterval(timer);
    levelEndTime = new Date().getTime();
    isStarted = false;
    alert(`Ghinion... a zburat tot timpu'.`)
    enableControlsByState(isStarted);
    timeProgressBar.classList.add('invisible');
    timeProgressBar.classList.remove('bg-danger','bg-warning');
    timeProgressBar.classList.add('bg-success');
    timeProgressBar.style = `width: ${0}%`;
  }
}

/**********************************************************************************************/
function computeMaxHeight() {
  return `${window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || window.screen.availHeight}px`;
}

/**********************************************************************************************/
function getRandomIntInRange(min, max) {
  const rand = Math.random();
  const inRange = rand * (parseInt(max) - parseInt(min)) + parseInt(min);
  return Math.floor(inRange);
}

/**********************************************************************************************/
function getRandomColor() {
  let color = "#";
  for (let index = 0; index < 6; index++) {
    const num = getRandomIntInRange(0, 16);

    switch (parseInt(num)) {
      case 10: color += 'A'; break;
      case 11: color += 'B'; break;
      case 12: color += 'C'; break;
      case 13: color += 'D'; break;
      case 14: color += 'E'; break;
      case 15: color += 'F'; break;
      default:
        color += num;
    }
  }

  return color;
}
