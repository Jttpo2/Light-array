class ReversePulse extends Program {
  constructor(lightArray) {
    super(lightArray);

    this.currentLightIndex = lightArray.length -1;

    this.fadeTime = 370;
  }

  update() {
    super.update();

    if (this.isActive) {
      this._lightUpCurrent();

      if (this._isTimeForUpdate()) {
        this._fadeCurrent();
        this._previous();
        this._lightUpCurrent();
        this.lastChange = millis();
      }
    }
  }
}
