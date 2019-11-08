var inputRadius = document.getElementById('radius');

var elementResultVolume = document.getElementById('result-volume');
var elementResultSurface = document.getElementById('result-surface');
var form = document.querySelector('.rectangle-form');

form.addEventListener('submit', function(evt) {

  var radius = inputRadius.value || 0;

  var volume = 4 / 3 * Math.PI * Math.pow(radius,3) ;
  var surface = 4  * Math.PI * Math.pow(radius,2) ;

  elementResultVolume.innerText = volume;
  elementResultSurface.innerText = surface;
  
  evt.preventDefault();
});