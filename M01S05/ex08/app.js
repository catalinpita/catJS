let button = document.getElementById('clicker');
let removeElementButton = document.getElementById('removeElementButton');
let queryButton = document.getElementById('queryButton');
let messageParagraph =document.getElementById('message');

const clickHandler = () => {
  alert("Apasashi");
}

button.addEventListener('click', clickHandler);

removeElementButton.addEventListener('click', () => {
  button.removeEventListener('click', clickHandler);
});

queryButton.addEventListener('click', () => {
  age = prompt('Spune-mi varsta');
  let message=`Ai ${age} ani`;
  console.log(message);
  messageParagraph.innerText=message;

});
