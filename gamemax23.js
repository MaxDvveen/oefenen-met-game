let x = 100; 
let y = 100;
let bloksnelheid = 5;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  

  if (keyIsDown(LEFT_ARROW)) {
    x -= bloksnelheid;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += bloksnelheid;
  }
  if (keyIsDown(UP_ARROW)) {
    y -= bloksnelheid;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += bloksnelheid;
  }
  
 
  x = constrain(x, 0, width - 50);
  y = constrain(y, 0, height - 100);
  
 
  fill('chartreuse');
  rect(x, 75, 50, 150);
  fill('red');
  rect(600, y, 50, 100);
  
 
  if (x + 50 > 600 && x < 650 && y + 100 > 75 && y < 225) {
    fill('chartreuse');
  }
  else {
    fill('red');
  }
  rect(600, y, 50, 100);
}
