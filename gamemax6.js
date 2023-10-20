function setup() {
    createCanvas(600, 400);
    noLoop();
  }
  
  function draw() {
    background(240);
  
    
    fill(255);
    rect(50, 50, 50, 50);
  
    
    fill(255);
    rect(150, 50, 50, 50);
  
    
    fill(255);
    rect(50, 150, 50, 50);
  
    
    push(); 
    fill(200, 50, 50);
    rect(150, 150, 50, 50);
    pop(); 
  
    fill(255);
    rect(250, 150, 50, 50);
  
    
    fill(255);
    rect(150, 250, 50, 50);
  
    
    fill(255);
    rect(50, 350, 50, 50);
  
    
    fill(255);
    rect(150, 350, 50, 50);
  
    
    fill('thistle');
    rect(250, 50, 50, 50);
    rect(250, 150, 50, 50);
    rect(350, 50, 50, 50);
    rect(350, 150, 50, 50);
    rect(250, 250, 50, 50);
    rect(350, 250, 50, 50);
    rect(250, 350, 50, 50);
    rect(350, 350, 50, 50);
  }
  