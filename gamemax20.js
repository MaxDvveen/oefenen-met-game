var xPositie = 100;
var yPositie = 100;
var zoomniveau = 1;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);

  if (mouseIsPressed == true) {
    xPositie += 5;
    yPositie += 1;
  }

  if (zoomniveau < 0) {
    zoomniveau = 0; 
}

  tekenJos(xPositie, yPositie, zoomniveau);
}

function tekenJos(x, y, zoom) {
  push();
  scale(zoom);
  fill('blue');
  rect(x, y, 50, 50);
  pop();
}
