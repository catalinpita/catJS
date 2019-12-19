
const showMessage = (message) => {
  let paragraph = document.getElementById('.toaster');

  if (paragraph) {

    paragraph.innerHTML = message;
  } else {

    let p = document.createElement('p');
    p.innerText = message;
    p.id = 'toaster';
    document.body.appendChild(p);
  };
};

const imageElement = document.querySelector('.image');

imageElement.addEventListener('load', () => {
  showMessage('Imaginea s-a incarcat');

  imageElement.addEventListener('click', (evt) => {
     alert(`Gata! s-a incarcat ${evt.target.src}`) });
});