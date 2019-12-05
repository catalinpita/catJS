(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const showButton = document.querySelector('#showButton');
    const toggleEventButton = document.querySelector('#toggleEventButton');

    const showAlert = () => {
      alert('Apasat');
    };

    const addMessage = () => {
      let p = document.createElement('p');
      if (eventBound) {
        p.innerText = 'Alerta va fi afisata';
      } else {
        p.innerText = 'Alerta nu va fi afisata';
      }
      document.body.appendChild(p);
    }

    let eventBound = true;
    showButton.addEventListener('click', showAlert);

    toggleEventButton.addEventListener('click', (evt) => {

      if (eventBound) {
        showButton.removeEventListener('click', showAlert);
        eventBound = false;
        evt.target.innerText = 'Porneste afisarea';
      } else {
        showButton.addEventListener('click', showAlert);
        eventBound = true;
        evt.target.innerText = 'Opreste afisarea';
      };

      addMessage();
    });
  });
})();