
var started=false;
var maxTries = document.getElementById('maxTries').value;
var upperRange = document.getElementById('upperRange').value;


document.getElementById("startButton").addEventListener("click", startFunction);



var maxTries;
var upperRange;

var numberToGuess;
if (!started) {
  started = true;
  numberToGuess = Math.random() * (upperRange + 1);  //(Math.random() * ((max - min) + 1)) + min
} else {

}


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

function startFunction() { started = true; document.getElementById("startButton").disabled = true; console.log(maxTries+ "-"+upperRange);};