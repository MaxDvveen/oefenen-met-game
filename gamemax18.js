var yPositie = 100;
var xPositie = 100;
var schaal = 1;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  // Achtergrond
  background(240);

  // Verplaats xPositie en yPositie
  yPositie += 1;
  xPositie += 5;

  // Teken ster
  tekenSter(xPositie, yPositie, schaal);

  // Verhoog schaal
  schaal += 0.05;
}

function tekenSter(x, y, s) {
  push();
  scale(s);
  fill('yellow');
  stroke('red');
  strokeWeight(3);
  beginShape();
  for (var i = 0; i < 5; i++) {
    var angle = TWO_PI / 5 * i;
    var xOffset = cos(angle) * 50;
    var yOffset = sin(angle) * 50;
    vertex(x + xOffset, y + yOffset);
    angle += TWO_PI / 10;
    xOffset = cos(angle) * 25;
    yOffset = sin(angle) * 25;
    vertex(x + xOffset, y + yOffset);
  }
  endShape(CLOSE);
  pop();
}
