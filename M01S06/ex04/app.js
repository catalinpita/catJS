(() => { })();

const paraghraphElement = document.createElement('p');
paraghraphElement.classList.add('message');


(() => {
  document.addEventListener('DOMContentLoaded', () => {
    let stage = document.querySelector('.stage');
    
    stage.addEventListener('mouseover', () => {
      document.body.appendChild(paraghraphElement);
      // console.log("ai intrat in ring");
      paraghraphElement.innerText = 'ai intrat in scena';
      setTimeout(() => { paraghraphElement.remove() }, 2000);
    });
    
    stage.addEventListener('mouseout', () => {
      document.body.appendChild(paraghraphElement);
      // console.log("ai iesit din ring");
      paraghraphElement.innerText = 'ai iesit din scena';
      setTimeout(() => { paraghraphElement.remove() }, 2000);
      
    });

  });
})();