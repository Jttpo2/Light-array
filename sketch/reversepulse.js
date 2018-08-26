class ReversePulse extends Program {
  constructor(lightArray) {
    super(lightArray);

    this.currentLightIndex = lightArray.length -1;

    this.fadeTime = 370;
  }

  update() {
    super.update();

    if (this.isActive) {
      this.lightUpCurrent();

      if (this.isTimeForUpdate()) {
        this.fadeCurrent();
        this.previous();
        this.lightUpCurrent();
        this.lastChange = millis();
      }
    }
  }
}
