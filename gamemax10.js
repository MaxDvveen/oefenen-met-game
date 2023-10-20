function setup() {
    createCanvas(400, 400);
    noStroke();
  }
  
  function draw() {
    background('lavender');
    fill('wheat');
    rect(0, 0, width, 30); 
    
    fill(255, 0, 0); 
    ellipse(mouseX, mouseY, 10, 10); 
}
  