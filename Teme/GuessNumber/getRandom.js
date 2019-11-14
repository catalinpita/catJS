
var isStarted = false;

var maxTriesInput = document.getElementById('maxTries');
var upperRangeInput = document.getElementById('upperRange');

var startButton = document.getElementById('startButton');

startButton.addEventListener("click", startFunction);



var maxTries = 0;
var upperRange = 0;

var numberToGuess;



// var inputWidth = document.getElementById('width');
// var elementResult = document.getElementById('result');

// var form = document.querySelector('.rectangle-form');

// form.addEventListener('submit', function(evt) {

//   var length = inputLength.value || 0;
//   var width = inputWidth.value || 0;
//   var result = 0;

//   result = length * width;
//   elementResult.innerText = result;
//   evt.preventDefault();
// });

function startFunction() {
  if (isStarted===false) {
    numberToGuess = Math.random() * (upperRange + 1); //(Math.random() * ((max - min) + 1)) + min
    isStarted = true;
    alert(isStarted);
  } else alert('Ignorted');
  alert
};