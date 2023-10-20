let xJager = 100;
let yJager = 100;
let xProoi = 600;
let yProoi = 300;
let bloksnelheid = 5;
let prooiSnelheid = 5;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);

  
  if (keyIsDown(LEFT_ARROW)) {
    xJager -= bloksnelheid;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xJager += bloksnelheid;
  }
  if (keyIsDown(UP_ARROW)) {
    yJager -= bloksnelheid;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yJager += bloksnelheid;
  }

 
  xJager = constrain(xJager, 0, width - 50);
  yJager = constrain(yJager, 0, height - 100);

 
  if (keyIsDown(65)) { // a
    xProoi -= prooiSnelheid;
  }
  if (keyIsDown(68)) { // d
    xProoi += prooiSnelheid;
  }
  if (keyIsDown(87)) { // w
    yProoi -= prooiSnelheid;
  }
  if (keyIsDown(83)) { // s
    yProoi += prooiSnelheid;
  }

 
  xProoi = constrain(xProoi, 0, width - 50);
  yProoi = constrain(yProoi, 0, height - 100);


  fill('chartreuse');
  rect(xProoi, yProoi, 50, 100);
  fill('red');
  rect(xJager, yJager, 50, 150);


  if (xJager + 50 > xProoi && xJager < xProoi + 50 && yJager + 150 > yProoi && yJager < yProoi + 100) {
    eindScherm("Geraakt!");
  }
}

function eindScherm(tekst) {
  textSize(48);
  textAlign(CENTER, CENTER);
  fill(0);
  text(tekst, width / 2, height / 2);
}
