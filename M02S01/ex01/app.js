class Car {
  topSpeed = 160;
  topReverseSpeed = -50;
  isTrunkOpen = false;
  areLightsOn = false;
  constructor(
    make,
    color,
    wheels,
    speed,
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }
  stop() {
    this.speed = 0;
    console.log(this.speed);
  }
  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
    } else if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    } else {
      this.speed = speed;
    }
    return this.speed;
  }
  openTrunk() {
    this.isTrunkOpen = true;
  }
  closeTrunk() {
    this.isTrunkOpen = false;
  }
  turnLightsOn() {
    if (!this.areLightsOn) {
      this.areLightsOn = true;
      console.log(this.areLightsOn);
    };
  }
  turnLightsOff() {
    if (this.areLightsOn) {
      this.areLightsOn = false;
      console.log(this.areLightsOn);
    }
  }
  flashLights() {
    this.turnLightsOff();
    this.turnLightsOn();
    window.setTimeout(() => { this.turnLightsOff(); }
    , 2 * 1000);
    // window.setInterval(this.turnLightsOn, 2 * 1000);
    // window.setInterval(this.turnLightsOff, 5 * 1000);
  }
}

var audi = new Car('Audi', 'black', 4, 50);
var opel = new Car('Opel', 'red', 4, 3); 

let cars=[audi,opel];

cars.forEach((car)=>{
  console.log(`Masina este marka ${car.make} si merge cu ${car.speed} km/h.`);
})