let variabeleA = 10;
let variabeleB = 11;

function setup() {
  createCanvas(400, 400); 
}

function draw() {
  background(240);

  textSize(32);
  textAlign(CENTER, CENTER);
  
  let resultaat = variabeleA * variabeleB; 
  
  text(variabeleA + " × " + variabeleB + " = " + resultaat, width / 2, height / 2);
}
