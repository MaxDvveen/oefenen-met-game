function setup() {
    createCanvas(600, 400);
    background(220);
  }
  
  function draw() {
    
    fill(255);
    rect(50, 50, 100, 100);
  
    
    fill(150);
    triangle(50, 50, 150, 50, 100, 0);
  

    fill(100);
    rect(85, 100, 30, 50);
  
    translate(90, -10);
  
   
    fill(255);
    rect(50, 50, 100, 100);
  
   
    fill(150);
    triangle(50, 50, 150, 50, 100, 0);
  
   
    fill(100);
    rect(85, 100, 30, 50);
  }
  // translate(90, -10); // Uitgeschakeld
  function setup() {
    createCanvas(600, 400);
    background(220);
  }
  
  function draw() {
    translate(300, 200);
  
    fill(255);
    rect(-50, -50, 100, 100);
  
    fill(150);
    triangle(-50, -50, 50, -50, 0, -100);
  }
  
