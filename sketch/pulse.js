class Pulse extends Program {
  constructor(lightMatrix, interval, columnDirection) {
    super(lightMatrix, interval);

    this.currentIndex = 0;
    this.fadeTime = 370;
    this.pulseAsColumn = columnDirection;
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

  _fadeCurrent() {
    if (this.pulseAsColumn) {
      this._fadeCol(this.currentIndex, this.fadeTime);
    } else {
      this._fadeRow(this.currentIndex, this.fadeTime);
    }
  }

  _lightUpCurrent() {
    if (this.pulseAsColumn) {
      this._lightUpCol(this.currentIndex, this.defaultLightColor);
    } else {
      this._lightUpRow(this.currentIndex, this.defaultLightColor);
    }
  }

  _next() {
    this.currentIndex++;
    if (this.currentIndex >= this.lights.rows) {
      this.currentIndex = 0;
    }
  }

  _previous() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.lights.rows -1;
    }
  }



}
