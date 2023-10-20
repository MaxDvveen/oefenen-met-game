function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES); 
    rectMode(CENTER); 
}
  
  function draw() {
    background(240);
  
   
    fill(100, 100, 255, 150); 
    rect(150, 150, 100, 100);
  
   
    push(); 
    rotate(45); 
    fill(255, 100, 100, 150); 
    rect(150, 150, 100, 100);
    pop(); 
    

    push();
    fill(255, 225, 0); 
    rect(150, 150, 50, 50);
    pop();
  }
  