var xJOS;
var yJOS;
var snelheidJOS = 17;

function setup() {
  createCanvas(800, 600);
  xJOS = width / 2;
  yJOS = height - 50;
}

function draw() {
  background(240);
  xJOS = constrain(xJOS, 0, width);
  yJOS -= snelheidJOS;
  snelheidJOS -= 0.5;
  scale(0.5);

  // Hoofd
  fill(255, 204, 0);
  ellipse(xJOS, yJOS, 25, 25);

  // Ogen
  fill(0);
  ellipse(xJOS - 5, yJOS - 5, 5, 5);
  ellipse(xJOS + 5, yJOS - 5, 5, 5);

  // Mond
  noFill();
  stroke(0);
  arc(xJOS, yJOS + 5, 10, 5, 0, PI);

  // Lichaam
  line(xJOS, yJOS + 12.5, xJOS, yJOS + 37.5);
  line(xJOS, yJOS + 37.5, xJOS - 10, yJOS + 50);
  line(xJOS, yJOS + 37.5, xJOS + 10, yJOS + 50);

  // Armen
  line(xJOS, yJOS + 20, xJOS - 10, yJOS + 25);
  line(xJOS, yJOS + 20, xJOS + 10, yJOS + 25);

  // Benen
  line(xJOS, yJOS + 37.5, xJOS - 10, yJOS + 50);
  line(xJOS, yJOS + 37.5, xJOS + 10, yJOS + 50);

  fill(0);
  textSize(20);
  text("x: " + xJOS + " y: " + yJOS + " snelheid: " + snelheidJOS, 10, 30);
}
