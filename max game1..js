function setup() {
    canvas = createCanvas(500,500); 
    background('grey');
    canvas.parent('processing');
    noLoop();
  }
  
  function draw() {
    noStroke();
    fill('green');
    ellipse(325,225,400); 


    stroke('red');
    fill('white');
    strokeWeight(10);
    rect(125,125,200,200); 
    

    fill('white');
    ellipse(325,225,300); 
  }
  