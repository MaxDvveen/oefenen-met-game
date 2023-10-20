function setup() {
    canvas = createCanvas(500,500);
    background('grey');
    canvas.parent('processing');
    noLoop();
  }
  
  function draw() {

    fill('pink');
    triangle(100, 300, 250, 100, 400, 300);
  

    fill('purple');
    triangle(100, 300, 250, 500, 400, 300);
  

    strokeWeight(5);
    stroke('pink');
    fill('darkred');
    beginShape();
    vertex(225,115);
    vertex(300,225);
    vertex(225,335);
    vertex(0,225);
    endShape(CLOSE);
  }
  