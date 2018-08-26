class LightHandler {
  constructor(noOfLights) {
    // this.lightSize = 45;
    this.lightSize = width / (noOfLights +2);
    this.margin = this.lightSize * 1;

    this.lights = this._initLights(noOfLights);

    this.programs = [];
    this.programs.push(new ReversePulse(this.lights));
    this.programs.push(new Pulse(this.lights));
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.programs.forEach(function(program) {
      program.update();
    });
  }

  display() {
    this.lights.forEach(function(light) {
      light.display();
    });
  }

  _initLights(noOfLights) {
    let lights = [];

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
        lights.push(light);
    }

    return lights;
  }

}
