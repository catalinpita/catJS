class Vehicle {
  constructor(
    make, 
    color, 
    wheels, 
    speed,
    topSpeed, 
    topReverseSpeed,
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels; 
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
  }

  displaySpeed() {
    console.log('Viteza curenta este: ', this.speed);
  }

  accelerate() {
    this.speed++;
    this.displaySpeed();
  }

  decelerate() {
    this.speed--;
    this.displaySpeed();
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
      return;
    }

    this.speed = speed;
    this.displaySpeed();
  }
}


class Car extends Vehicle {
  constructor(
    make, 
    color, 
    speed,
    topSpeed, 
    topReverseSpeed,
  ) {
    super(make, color, 4, speed, topSpeed, topReverseSpeed);
  }
}

class Bicycle extends Vehicle {
  constructor(
    make, 
    color, 
    speed,
    topSpeed, 
  ) {
    super(make, color, 2, speed, topSpeed, 0);

  }

  decelerate() {
    if (--this.speed < 0) {
      this.speed = 0;
    }

    this.displaySpeed();
  }
}