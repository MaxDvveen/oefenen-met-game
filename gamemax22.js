let afstand;

function setup() {
  createCanvas(450, 450);
}

function draw() {
  background(240);

 
  afstand = dist(mouseX, mouseY, 225, 225);


  if (x < 25 || x > width - 25 || y < 25 || y > height - 25) {
    tekenJos('red');
  }


  if (afstand <= 5) {
    tekenJos('red');
  } else {
    tekenJos('black');
  }


  fill(0);
  textSize(20);
  text(`Afstand tot bol: ${afstand}`, 10, 30);

 
  if (x < width / 2) {
    background('yellow');
  } else {
    background('white');
  }
}

function tekenJos(kleur) {
  fill(kleur);
  ellipse(x, y, 50, 50);
}

