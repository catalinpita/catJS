let boxElement = document.querySelector('.box');

let cssClassName = 'animate-class';
window.setTimeout(() => {
  boxElement.classList.add(cssClassName);

  boxElement.setTimeout(() => {
    boxElement.classList.remove(cssClassName);
  }, 2000);
}, 2000);

let applyButton = document.querySelector(`#applyButton`);
let darkenButton = document.querySelector(`#darkenButton`);
applyButton.addEventListener('click', (evt) => {
  // boxElement.classList.toggle(cssClassName);
  if (boxElement.classList.contains(cssClassName)) {
    boxElement.classList.remove(cssClassName);
    evt.target.innerText = 'Adauga';
  } else {
    boxElement.classList.add(cssClassName);
    evt.target.innerText = 'Elimina';
  }
});

darkenButton.addEventListener('click', () => {
  boxElement.style.backgroundColor = '#000';
});