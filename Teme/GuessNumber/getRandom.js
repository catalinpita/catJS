const timeProgressBar = document.getElementById('timeProgressBar');
const transitionSettings = timeProgressBar.style.transition;

const container = document.getElementById('container');
container.style.backgroundColor = '#FFFFFF';
container.style.minHeight = computeMaxHeight();
container.style.maxWidth= '900px';
container.style.display = 'flex';

container.style.alignItems = 'center';
container.style.justifyContent = 'center';

// document.getElementById('settingsForm').style.flex='center';

const secondsToCompleteLevel = 180;
document.getElementById("timeLimit").innerText = ` ${secondsToCompleteLevel}`;
const defaultUserName = "Anonymous";
var userName = prompt("Sub ce nume te joci?", defaultUserName) || defaultUserName;
var user = getFromLocalStorage(userName);

const message1 = `Bine ai intrat in joc <b>${userName}</b>!!!`;
const message2 = `Bine ai revenit  <b>${userName}</b>!!!`;


document.getElementById('userEntrance').innerHTML = ((user.maxLevel == 0) ? message1 : message2);

const message3 = `Recordul tau este de <b>${user.maxPoints}</b> puncte si <b>${user.maxLevel}</b> nivele!`;
document.getElementById('userPerformance').innerHTML = user.maxLevel == 0 ? "" : message3;

var level = {
  number: 0,
  numberToguess: '',
  currentTry: '',
  triedNumbers: [],
  points: 0,
  startTime: 0,
  endTime: 0,
  cheated: false,
  pauseTime: 0
}

var game = {
  maxTries: 0,
  startInterval: 0,
  endInterval: 0,
  level: 0,
  points: 0,
  startTime: 0,
  endTime: 0
}

var isStarted;
var cheated, cheatedLevel;
var maxTries, upperRange;


var tryNumber;
var levelNr, points,  levelEndTime;


var maxTriesInput = document.getElementById('maxTries');
const upperRangeInput = document.getElementById('upperRange');

const currentTryInput = document.getElementById('currentTry');

const startButton = document.getElementById('startButton');
const tryButton = document.getElementById('tryButton');
const cheatButton = document.getElementById('cheatButton');
const pauseButton = document.getElementById('pauseButton');

document.getElementById('settingsForm').addEventListener("submit", startFunction);
document.getElementById('gameForm').addEventListener("submit", tryFunction);

cheatButton.addEventListener("click", cheatFunction);
pauseButton.addEventListener("click", pauseFunction);

var timer;
initFunction();

/**********************************************************************************************/
function pauseFunction(evt) {
  
  if (isStarted === true) {
    const pauseStartTime= new Date();
    alert("Bea ceiutul, plimba câinele... dar intoarce-te repede si apasa OK.");
    const pauseDuration=new Date()-pauseStartTime;
    
    level.startTime+=pauseDuration;
    
  }
  evt.preventDefault();
}
/**********************************************************************************************/

function startFunction(evt) {

  if (isStarted === false) {

    timeProgressBar.classList.remove('bg-danger', 'bg-warning', 'bg-success');
    // timeProgressBar.classList.add('invisible', 'collapsing');
    timeProgressBar.classList.add('no-transition');
    timeProgressBar.style = `width: 0%`;
    timeProgressBar.classList.remove('no-transtion');
    // timeProgressBar.classList.add('bg-success');
    // timeProgressBar.classList.remove('invisible', 'collapsing');


    document.getElementById('body').style.backgroundColor = getRandomColor();
    level.startTime = (new Date()).getTime();
    if (levelNr == 0)
      levelNr++;

    document.getElementById('level').innerText = levelNr;
    timer = window.setInterval(displayTimeProgress, 300);
    maxTries = maxTriesInput.value;
    upperRange = parseInt(upperRangeInput.value);
    level.numberToGuess = Math.ceil(getRandomIntInRange(0, upperRange));
    level.triedNumbers = [];
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
    alert("Ehhh...");
  } else if (isStarted === true) {
    if (myTry > upperRange) {
      alert(`Psssst ma gandesc la un numar intre 0 si ${upperRange}.`);

    } else if (notTriedYet(level.triedNumbers, myTry)) {
      if (myTry === level.numberToGuess) {
        document.getElementById('response').innerHTML = `Bravo, ai ghicit! <b>${myTry}</b> este numarul la care m-am gandit.`;
        isStarted = false;
        enableControlsByState(isStarted);
        levelNr++;
        updateUserStorage(user, levelNr, points);
        document.getElementById('level').innerText = levelNr;
        window.clearInterval(timer);
        level.startTime.levelEndTime = new Date().getTime();
      } else {
        document.getElementById('response').innerHTML = `Numarul <b>${myTry}</b> este mai <b>${(myTry < level.numberToGuess) ? 'mic' : 'mare'}</b> decat cel la care ma gandesc.`;

        if (++tryNumber > maxTries) {
          document.getElementById('response').innerHTML = `Ai terminat munitia!!! eu ma gandeam la numarul ${level.numberToGuess}.`;
          document.getElementById('numberOfTry').innerText = '...';

          if (levelNr > 3) {
            level--;
          } else {
            isStarted = false;
          }
          enableControlsByState(isStarted);
        }

        level.triedNumbers.push(myTry);
      }
      document.getElementById('numberOfTry').innerText = tryNumber;
      document.getElementById('yourTries').innerText = level.triedNumbers;
    } else {
      alert(`Ai mai incercat numarul ${myTry}.`);
    }
  }

  evt.preventDefault();
}

/**********************************************************************************************/
function cheatFunction(evt) {

  if (levelNr === 1 && level.triedNumbers.length === 0) {
    alert("Serios!?! Chiar asa, din prima? |:-(>)");
  } else if (cheated === false || levelNr === cheatedLevel) {
    alert(`Si vântul shoptea.... ${level.numberToGuess}.`);
    cheated = true;
    cheatedLevel = levelNr;
  } else {
    if ((getRandomIntInRange(0, 100) % 7) !== 0) {
      const mgsNumber = getRandomIntInRange(0, 100) % 4 === 0 ? level.numberToGuess : getRandomIntInRange(0, upperRange);
      alert(`Ingeri, strigoi, vârcolaci, poate chiar si niste draci in cor shushoteau.... \n ${mgsNumber}.\n
       De te mint au ba afli cand vei incerca.`);
      cheated = true;
    } else {
      level.levelEndTime = new Date().getTime();
      alert(`Hehe! Sarpele zburator o zi zboara una nu, astzai nu mai zboara. Incearca poimâine! \n 
    Butonul insala mereu, uneori jocul, uneori pe tine...\n 
    Pe curand!`);
      isStarted = false;
      levelNr = 1;
      window.clearInterval(timer);
      document.getElementById('yourTries').innerText += ' pâna la urma ai trisat |:~))';
      document.getElementById('level').innerText = levelNr;
      enableControlsByState(isStarted);

    }
  }
  evt.preventDefault();
}

/**********************************************************************************************/
function initFunction() {
  levelNr = 0;
  points = 0;
  cheatedLevel = 0;
  isStarted = false;
  cheated = false;
  maxTries = 0;
  upperRange = 0;
  level.startTime=0;
  level.endTime=0;
  level.numberToGuess = 0;
  level.triedNumbers = [];
  tryNumber = 1;

  enableControlsByState(isStarted);
  document.getElementById('response').innerHTML = '';
  document.getElementById('numberOfTry').innerText = '1';
  document.getElementById('yourTries').innerText = '';
  document.getElementById('level').innerText = levelNr;

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
function updateUserStorage(user, levelNr, points) {
  var isLevelRecord = false;
  if (levelNr > user.maxLevel) {
    user.maxLevel = levelNr;
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

  const secondsElapsed = Math.ceil((new Date().getTime() - level.startTime) / 1000);

  const displayedTime = Math.min(secondsElapsed, secondsToCompleteLevel);
  const preposition = (displayedTime % 100 === 0 || (displayedTime % 100 > 19)) ? " de" : "";

  document.getElementById('seconds').innerText = (displayedTime + preposition);

  var timePercentage = parseInt(Math.floor((secondsElapsed * 100) / secondsToCompleteLevel));

  const timeProgressBar = document.getElementById('timeProgressBar');
  timeProgressBar.classList.remove('invisible')
  timeProgressBar.style = `width: ${timePercentage}%`;

  if (timePercentage < 50) {
    timeProgressBar.classList.add('bg-success');
    timeProgressBar.classList.remove('bg-danger', 'bg-warning');

  } else if (timePercentage < 75) {
    timeProgressBar.classList.add('bg-warning');
  } else if (timePercentage <= 100) {

    timeProgressBar.classList.add('bg-danger');
  } else {
    window.clearInterval(timer);
    levelEndTime = new Date().getTime();
    isStarted = false;
    alert(`Ghinion... a zburat tot timpu'.`)
    enableControlsByState(isStarted);
    timeProgressBar.classList.add('invisible');
    timeProgressBar.classList.remove('bg-danger', 'bg-warning');
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
