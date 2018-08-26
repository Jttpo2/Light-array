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

    this.isFading = false;
    this.fadeStartTime = 0;
    this.fadeEndTime = 0;
    this.brightnessMin = 10;
    this.brightnessMax = 100;
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    if (this.isFading) {
      this._executeFade();
    }
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
      // Do nothing
    }
  }

  turnOn(color) {
    this.lightColor = color;
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
  }

  // Fade to black over a given time (in millis)
  fade(time) {
    this.fadeStartTime = millis();
    this.fadeEndTime = this.fadeStartTime + time;
    this.isFading = true;
  }

  _executeFade() {
    if (brightness(this.lightColor) < this.brightnessMin) {
      this.isFading = false;
      return;
    }
    let brightnessAfterFade = map(millis(), this.fadeStartTime, this.fadeEndTime, this.brightnessMin, this.brightnessMax);
    this._setBrightness(brightnessAfterFade);
  }

  _setBrightness(value) {
    colorMode(HSB);
    this.lightColor = color(
      hue(this.lightColor),
      saturation(this.lightColor),
      value
    );
    if (brightness(this.lightColor) <= 10) {
      this.turnOff();
    }
  }

  // Dim instantly by brightness amount
  dim(amount) {
    this._setBrightness(
      brightness(this.lightColor) - amount
    );
  }

}
