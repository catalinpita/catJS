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
    
    return this;
  }

  decelerate() {
    this.speed--;
  }
}

var audi = new Car('Audi', 'black', 4, 50);

audi.accelerate(); 
audi.accelerate();
audi.accelerate();
audi.accelerate();