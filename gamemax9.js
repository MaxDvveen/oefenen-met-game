function setup() {
    createCanvas(400, 400);
    textSize(20);
    textFont('Arial');
  }
  
  function draw() {
    background(240);
    
    fill(0);
    text("Window Height: " + windowHeight, 20, 20);
    text("Canvas Height: " + height, 20, 50);
    
    fill(0, 0, 255);
    rect(50, 100, 200, 100);
    
    fill(255);
    text("mouseX:" + round(mouseX) + " mouseY:" + round(mouseY), mouseX, mouseY);
  }
  
  function textProperties(font, size, leading, alignX, alignY) {
    textFont(font);
    textSize(size);
    textLeading(leading);
    textAlign(alignX, alignY);
  }
  