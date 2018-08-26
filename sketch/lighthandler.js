class LightHandler {
  constructor(noOfLights) {
    // this.lightSize = 45;
    this.lightSize = width / (noOfLights +2);
    this.margin = this.lightSize * 1;

    this.defaultInterval = 150;

    this.lights = new LightMatrix(10, 10);

    this.programs = [];
    // this.programs.push(new ReversePulse(this.lights, this.defaultInterval));
    this.programs.push(new Pulse(this.lights, this.defaultInterval, true));
    this._activateAllPrograms();
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.programs.forEach(function(program) {
      program.update();
    });

    this.lights.update();
  }

  display() {
    this.lights.display();
  }

  _activateAllPrograms() {
    this.programs.forEach(function(p) {
      p.start();
    })
  }

}
