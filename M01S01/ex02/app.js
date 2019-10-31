var inputLength = document.getElementById('length');
var inputWidth = document.getElementById('width');
var elementResult = document.getElementById('result');

var form = document.querySelector('.rectangle-form');

form.addEventListener('submit', function(evt) {

  var length = inputLength.value || 0;
  var width = inputWidth.value || 0;
  var result = 0;

  result = length * width;
  elementResult.innerText = result;
  evt.preventDefault();
});