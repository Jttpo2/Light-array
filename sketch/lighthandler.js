class LightHandler {
  constructor(noOfLights) {
    this.lights = [];

    // this.lightSize = 45;
    this.lightSize = width / (noOfLights +2);

    this.defaultLightColor = color(200, 140, 5);

    this.margin = this.lightSize * 1;
    this.xStart = this.margin;
    this.xEnd = width - this.margin; // rectMode(CENTER)
    this.yStart = height/2;
    this.yEnd = height/2;
    let intervalX = (this.xEnd-this.xStart) / (noOfLights -1);
    let intervalY = (this.yEnd-this.yStart) / (noOfLights -1);
    for (let l=0; l<noOfLights; l++) {
        let x = this.xStart + intervalX * l;
        let y = this.yStart + intervalY * l;
        let light = new Light(x, y, this.lightSize);
        this.lights.push(light);
    }

    this.interval = 120;
    this.lastChange = millis();

    this.isActive = true;
    this.currentLightIndex = 0;

    this.fadeTime = 370;
    this.dimAmount = 2.1;
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    if (this.isActive) {
      this.lightUpCurrent();
      // this.dimAll();

      if (this.isTimeForUpdate()) {
        // this.turnOffCurrrent();
        this.fadeCurrent();
        this.next();
        this.lightUpCurrent();
        this.lastChange = millis();
      }
    }

    this.lights.forEach(function(light) {
      light.update();
    });
  }

  display() {
    this.lights.forEach(function(light) {
      light.display();
    });
  }

  startPulse() {

  }

  stopPulse() {

  }

  lightUpCurrent() {
    this.lights[this.currentLightIndex].turnOn(this.defaultLightColor);
  }

  turnOffCurrrent() {
    this.lights[this.currentLightIndex].turnOff();
  }

  fadeCurrent() {
    this.lights[this.currentLightIndex].fade(this.fadeTime);
  }

  dimAll() {
    this.lights.forEach(function(light) {
      light.dim(this.dimAmount);
    }, this);
  }

  turnOffAll() {
    this.lights.forEach(function(light) {
      light.turnOff();
    });
  }

  next() {
    this.currentLightIndex++;
    if (this.currentLightIndex >= this.lights.length) {
      this.currentLightIndex = 0;
    }
  }

  isTimeForUpdate() {
    return (millis() - this.lastChange) > this.interval;
  }
}
