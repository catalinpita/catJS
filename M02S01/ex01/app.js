class Car {
  topSpeed = 160;
  topReverseSpeed = -50;

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
    if (speed >this. topSpeed) {
      this.speed = this.topSpeed;
    } else if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    } else {
      this.speed = speed;
    }
    return this.speed;
  }
}

var audi = new Car('Audi', 'black', 4, 50);
var opel = new Car('Opel', 'red', 4, 3);
