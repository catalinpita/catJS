
var isStarted = false;

var maxTries, upperRange;
var numberToGuess;
var triedNumbers;
var tryNumber;

var maxTriesInput = document.getElementById('maxTries');
var upperRangeInput = document.getElementById('upperRange');

var currentTryInput = document.getElementById('currentTry');

var startButton = document.getElementById('startButton');
var tryButton = document.getElementById('tryButton');
var cheatButton = document.getElementById('cheatButton');

startButton.addEventListener("click", startFunction);

tryButton.addEventListener("click", tryFunction);
cheatButton.addEventListener("click", cheatFunction);


initFunction();

/**********************************************************************************************/
// numberToGuess = Math.random() * (upperRange + 1); //(Math.random() * ((max - min) + 1)) + min.
function startFunction(evt) {
  if (isStarted === false) {

    maxTries = maxTriesInput.value;
    upperRange = parseInt(upperRangeInput.value);
    numberToGuess = Math.ceil(Math.random() * upperRange);
    triedNumbers=[];
    isStarted = true;
    tryNumber=1;
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
function notTriedYet(triedNumbers, myTry) {
  for (index = 0; index < triedNumbers.length; index++)
    if (myTry === parseInt(triedNumbers[index]))
      return false;
  return true;
}

/**********************************************************************************************/
function cheatFunction(evt) {

  if (isStarted == true) {
  alert(numberToGuess);
    // isStarted = false;
    // enableControlsByState(isStarted)
  }
  evt.preventDefault();
}

/**********************************************************************************************/
function initFunction() {

  isStarted = false;
  maxTries = 0;
  upperRange = 0;
  numberToGuess = 0;
  triedNumbers = [];
  tryNumber = 1;
 
  enableControlsByState(isStarted);
  document.getElementById('response').innerHTML = '';
  document.getElementById('numberOfTry').innerText = '1';
  document.getElementById('yourTries').innerHTML = '';

}

/**********************************************************************************************/
function enableControlsByState(state) {
  if (state == false) {
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