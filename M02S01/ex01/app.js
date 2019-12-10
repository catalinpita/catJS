class Car {
  constructor(
    make, 
    color, 
    wheels, 
    speed
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels; 
    this.speed = speed;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }
}

var audi = new Car('Audi', 'black', 4, 50);