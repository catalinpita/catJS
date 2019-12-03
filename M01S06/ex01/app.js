let car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  isTrunkOpen: false,
  areLigtsOn: false,
  topSpeed: 160,
  topReverseSpeed: -50,
  turnLightsOn: function () { this.areLigtsOn = true; },

  turnLightsOff: function () { this.areLigtsOn = false; },

  setSpeed: function (speed) {
    if (speed >= this.topReverseSpeed && speed <= this.topSpeed) {
      this.speed = speed;
    } else if (speed < 0) {
      this.speed = this.topReverseSpeed;
    } else {
      this.speed = this.topSpeed;
    }
  },
  // flashLights: function () {
  //   this.turnLightsOff;
  //   this.turnLightsOn;
  //   window.setTimeout(function () {
  //     this.turnLightsOff;
  //   }, 800);
  // },


  flashLights: function () {
    this.turnLightsOff;
    this.turnLightsOn;
    window.setTimeout(() => {
      this.turnLightsOff;
    }, 800);
  },

  openTrunk: function () { this.isTrunkOpen = true; },
  closeTrunk: function () { this.isTrunkOpen = false; },
  accelerate: function () { this.speed++; },
  decelerate: function () { this.speed--; },

  stop: function () { this.speed = 0; }
}

// window.setTimeout(() => { console.log(`Autrecut 2 secunde`); }, 2 * 1000);

// Afiseaza propozitia: "Masina era marca make si se deplasa cu speed km/h".
console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h`);

// Decelereaza masina cu 5 unitati apoi afisaza propozitia: "Viteza noua este speed km/h".
for (let step = 0; step < 5; step++) {
  car.accelerate();
}
console.log(`Viteza noua este ${car.speed} km/h`);
// Adauga o metoda numita stop() care sa faca proprietatea speed 0, apoi afiseaza viteza.

car.stop();
console.log(`Viteza noua este ${car.speed} km/h`);
// Adauga o proprietate numita topSpeed si asigneaza-i valoarea 160.

// Adauga o proprietate numita topReverseSpeed si asigneaza-i valoarea -50.
// Adauga  o metoda numita setSpeed() care sa poata primi un parametru fix pentru viteza. Metoda trebuie sa verifice ca nu se depasesc limitele inferioare si superioare, caz in care se folosesc proprietatile topSpeed si topReverseSpeed
car.setSpeed(220);
console.log(`Viteza noua este ${car.speed} km/h`);
