class Pulse extends Program {
  constructor(lightMatrix, interval) {
    super(lightMatrix, interval);

    this.currentRowIndex = 0;

    this.fadeTime = 370;
  }

  update() {
    super.update();

    if (this.isActive) {
      this._lightUpCurrent();

      if (this._isTimeForUpdate()) {
        this._fadeCurrent();
        this._nextRow();
        this._lightUpCurrent();
        this.lastChange = millis();
      }
    }
  }

  _fadeCurrent() {
    this._fadeRow(this.currentRowIndex, this.fadeTime);
  }

  _lightUpCurrent() {
    this._lightUpRow(this.currentRowIndex, this.defaultLightColor);
  }

  _nextRow() {
    this.currentRowIndex++;
    if (this.currentRowIndex >= this.lights.rows) {
      this.currentRowIndex = 0;
    }
  }

  _previousRow() {
    this.currentRowIndex--;
    if (this.currentRowIndex < 0) {
      this.currentRowIndex = this.lights.rows -1;
    }
  }

}
