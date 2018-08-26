class Program {
  constructor(lightArray) {
    this.defaultLightColor = color(200, 140, 5);

    this.lights = lightArray;

    this.isActive = true;

    this.interval = 150;
    this.lastChange = millis();

    this.dimAmount = 2.1;
  }

  update() {
    this.lights.forEach(function(light) {
      light.update();
    });
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

  next() {
    this.currentLightIndex++;
    if (this.currentLightIndex >= this.lights.length) {
      this.currentLightIndex = 0;
    }
  }

  previous() {
    this.currentLightIndex--;
    if (this.currentLightIndex < 0) {
      this.currentLightIndex = this.lights.length -1;
    }
  }

  isTimeForUpdate() {
    return (millis() - this.lastChange) > this.interval;
  }

  startPulse() {

  }

  stopPulse() {

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

}
