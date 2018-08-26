class Program {
  constructor(lightMatrix, interval) {
    this.defaultLightColor = color(200, 140, 5);

    this.lights = lightMatrix;

    this.isActive = false;

    this.interval = interval;
    this.lastChange = millis();

    this.dimAmount = 2.1;
  }

  update() {

  }

  _lightUpRow(index, color) {
    this.lights.lightUpRow(index, color)
  }

  _turnOffRow(index) {
    this.lights.turnOffRow(index);
  }

  _fadeRow(index, fadeTime) {
    this.lights.fadeRow(index, fadeTime)
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

  // _dimAll() {
  //   this.lights.forEach(function(light) {
  //     light.dim(this.dimAmount);
  //   }, this);
  // }
  //
  // _turnOffAll() {
  //   this.lights.forEach(function(light) {
  //     light.turnOff();
  //   });
  // }

}
