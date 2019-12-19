let buttons = document.querySelectorAll('.colorButton');
let boxElement = document.querySelector('.box');

buttons.forEach((button) => {
  button.addEventListener('click',(evt) => {
    boxElement.style.backgroundColor = evt.target.innerText;
  });
});