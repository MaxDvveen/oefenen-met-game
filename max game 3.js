function setup() {
    canvas = createCanvas(900,450); 
    background(255,192,203); 
    canvas.parent('processing');
    noLoop();
  }
  
  function draw() {
   
    fill(0,255,0); 
    rect(0,200,900,50); 
    fill(0,0,255,0.3); 
      ellipse(450,225,450);


    fill(173,216,230); 
    triangle(600,100,750,250,600,400);
}
  