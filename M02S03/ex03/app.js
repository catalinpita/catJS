
let stage = document.querySelector('.stage');
let message = document.querySelector('.message');
let countElement = document.querySelector('.count');
let count = 0;
stage.addEventListener('mouseover', () => {
  message.innerText = 'Soarecele e pe scena';
  count++;
});

stage.addEventListener('mouseout', () => {
  message.innerText = 'Soarecele nu e pe scena';
  countElement.innerText = `Soaricele a fost pe scena de ${count} ori.`;
});