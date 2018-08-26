class LightMatrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;

    this.lightSize = width / (cols +2);
    this.margin = this.lightSize * 1;

    this.lights = this._initLights(rows, cols);
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.lights.forEach(function(lightArray) {
      lightArray.forEach(function(light) {
        light.update();
      });
    });
  }

  display() {
    this.lights.forEach(function(lightArray) {
      lightArray.forEach(function(light) {
        light.display();
      });
    });
  }

  _initLights(rows, cols) {
    let lights = Array(rows).fill().map(
      x => Array().fill()
    );

    let xStart = this.margin;
    let xEnd = width - this.margin; // rectMode(CENTER)
    let yStart = this.margin;
    let yEnd = height - this.margin;

    let intervalX = (xEnd - xStart) / Math.max(rows -1, 1);
    let intervalY = (yEnd - yStart) / Math.max(cols -1, 1);
    for (let r=0; r<rows; r++) {
      for (let c=0; c<cols; c++) {
        // let x = map(c, 0, rows, xStart, xEnd + this.margin);
        // let y = map(r, 0, rows, yStart, yEnd + this.margin);
        // let y = map(c, yStart, yEnd, 0, cols);
        let x = xStart + intervalX * c;
        let y = yStart + intervalY * r;
        let light = new Light(x, y, this.lightSize);
        lights[r].push(light);
      }
    }
    return lights;
  }

  lightUpRow(row, color) {
    this.lights[row].forEach(function(light) {
        light.turnOn(color);
    });
  }

  turnOffRow(row) {
    this.lights[row].forEach(function(light) {
        light.turnOff();
    });
  }

  fadeRow(row, fadeTime) {
    this.lights[row].forEach(function(light) {
        light.fade(fadeTime);
    });
  }

}
