function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


const showMessage = (message, targetElement) => {
  let paragraph = document.getElementById(targetElement);

  if (paragraph) {

    paragraph.innerHTML = message;
  } else {

    let p = document.createElement('p');
    p.innerText = message;
    p.id = targetElement;
    document.body.appendChild(p);
  };
};
// window.addEventListener('resize', () => { console.log("fsd"); });
let originalWidth = window.innerWidth;

window.addEventListener('resize', debounce((evt) => {
  console.log("fsd");
  showMessage(`Are ${evt.target.innerWidth} pixeli`, 'toaster');

  if (evt.target.innerWidth !== originalWidth) {
    showMessage('Fereastra si-a schimbat latimea!!!', 'salam');
  }else{
    showMessage('Fereastra NU si-a schimbat latimea!!!', 'salam');
  }

  showMessage (`Aria: ${evt.target.innerWidth*evt.target.innerHeight} pilexi patrati`,'area');
}, 400));