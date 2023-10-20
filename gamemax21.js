let x = 300;
let snelheid = 5;
let diameter = 200;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(240);

  if (mouseIsPressed || snelheid > 0) {
    fill('green');
  } else if (snelheid < 0) {
    fill('blue');
  } else {
    fill('red');
  }

  if (mouseIsPressed) {
    diameter = 100;
  } else {
    diameter = 200;
  }

  if (x > 880 || x < 120) {
    snelheid = -1 * snelheid;
  }

  x += snelheid;
  ellipse(x, 170, diameter);
}
