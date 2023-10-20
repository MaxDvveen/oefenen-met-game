function setup() {
    createCanvas(800, 600);
    xJOS = width / 2;
    yJOS = height / 2;
  }
  
  function draw() {
    background(240);
    xJOS = constrain(mouseX, 0, width);
    yJOS = constrain(mouseY, 0, height);
    scale(0.5);
  
    // Hoofd
    fill(255, 204, 0);
    ellipse(xJOS, yJOS, 25, 25);
  
    // Ogen
    fill(0);
    ellipse(xJOS - 5, yJOS - 5, 5, 5);
    ellipse(xJOS + 5, yJOS - 5, 5, 5);
  
    // Mond
    noFill();
    stroke(0);
    arc(xJOS, yJOS + 5, 10, 5, 0, PI);
  
    // Lichaam
    line(xJOS, yJOS + 12.5, xJOS, yJOS + 37.5);
    line(xJOS, yJOS + 37.5, xJOS - 10, yJOS + 50);
    line(xJOS, yJOS + 37.5, xJOS + 10, yJOS + 50);
  
    // Armen
    line(xJOS, yJOS + 20, xJOS - 10, yJOS + 25);
    line(xJOS, yJOS + 20, xJOS + 10, yJOS + 25);
  
    // Benen
    line(xJOS, yJOS + 37.5, xJOS - 10, yJOS + 50);
    line(xJOS, yJOS + 37.5, xJOS + 10, yJOS + 50);
  }
  