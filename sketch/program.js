class Program {
  constructor(lightArray, interval) {
    this.defaultLightColor = color(200, 140, 5);

    this.lights = lightArray;

    this.isActive = false;

    this.interval = interval;
    this.lastChange = millis();

    this.dimAmount = 2.1;
  }

  update() {
    this.lights.forEach(function(light) {
      light.update();
    });
  }

  _lightUpCurrent() {
    this.lights[this.currentLightIndex].turnOn(this.defaultLightColor);
  }

  _turnOffCurrrent() {
    this.lights[this.currentLightIndex].turnOff();
  }

  _fadeCurrent() {
    this.lights[this.currentLightIndex].fade(this.fadeTime);
  }

  _next() {
    this.currentLightIndex++;
    if (this.currentLightIndex >= this.lights.length) {
      this.currentLightIndex = 0;
    }
  }

  _previous() {
    this.currentLightIndex--;
    if (this.currentLightIndex < 0) {
      this.currentLightIndex = this.lights.length -1;
    }
  }

  _isTimeForUpdate() {
    return (millis() - this.lastChange) > this.interval;
  }

  start() {
    this.isActive = true;
  }

  stop() {
    this.isActive = false;
  }

  _dimAll() {
    this.lights.forEach(function(light) {
      light.dim(this.dimAmount);
    }, this);
  }

  _turnOffAll() {
    this.lights.forEach(function(light) {
      light.turnOff();
    });
  }

}
