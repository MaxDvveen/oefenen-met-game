var horizontaalA = 200;
var horizontaalB = 500;
var verticaal = 200;
var diameter = 50;

function setup() {
  createCanvas(800, 400);
  frameRate(50);
}

function draw() {
  background(255);

  
  fill('blue');
  ellipse(horizontaalA, verticaal, diameter, diameter);

  
  fill('darkred');
  ellipse(horizontaalB, verticaal, diameter, diameter);

  
  horizontaalB += 1;

  
  fill(0);
  textSize(20);
  text("positie A = " + horizontaalA + " positie B = " + horizontaalB, 10, 30);
}
