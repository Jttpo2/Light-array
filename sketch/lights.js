new p5();

// let fr = 60;
let backgroundColor;

let lightHandler;

function setup() {
	// frameRate(fr);

	let canvas = createCanvas(
		window.innerWidth,
		window.innerHeight
		);

	backgroundColor = color(0);

	lightHandler = new LightHandler(10);
}

function draw() {
	background(backgroundColor);

	lightHandler.run();
}

function windowResized() {
	resizeCanvas(
		window.innerWidth,
		window.innerHeight);
}
