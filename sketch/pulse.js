class Pulse extends Program {
  constructor(lightArray, interval) {
    super(lightArray, interval);

    this.currentLightIndex = 0;

    this.fadeTime = 370;
  }

  update() {
    super.update();

    if (this.isActive) {
      this._lightUpCurrent();

      if (this._isTimeForUpdate()) {
        this._fadeCurrent();
        this._next();
        this._lightUpCurrent();
        this.lastChange = millis();
      }
    }
  }

}
