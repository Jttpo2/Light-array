class Light {
  constructor(x, y, size) {
    this.posX = x;
    this.posY = y;
    this.size = size;
    this.isOn = false;

    this.lightColor = color(230);
    this.baseColor = color(20);

    this.sizeRatio = 8.5/10;
    this.cornerRadius = 6;
  }

  run() {
    this.update();
    this.display();
  }

  update() {

  }

  display() {
    colorMode(HSB);

    rectMode(CENTER);
    fill(this.baseColor);
    noStroke();
    rect(this.posX, this.posY, this.size, this.size, this.cornerRadius);

    if (this.isOn) {
      ellipseMode(CENTER);
      fill(this.lightColor);
      noStroke();
      ellipse(this.posX, this.posY, this.size * this.sizeRatio, this.size * this.sizeRatio);
    } else {

    }
  }

  turnOn(color) {
    this.lightColor = color;
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
  }

  dim(amount) {
    colorMode(HSB);
    this.lightColor = color(
      hue(this.lightColor),
      saturation(this.lightColor),
      brightness(this.lightColor) - amount
    );
    if (brightness(this.lightColor) <= 10) {
      this.turnOff();
    }
  }

}
