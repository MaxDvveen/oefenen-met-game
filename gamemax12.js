function setup() {
    createCanvas(800, 600);
    xJOS = width / 2;
    yJOS = height / 2;
  }
  
  function draw() {
    background(240);
    xJOS--;
    yJOS -= 2;
    translate(mouseX, mouseY);
  
    // Hoofd
    fill(255, 204, 0);
    ellipse(xJOS, yJOS, 50, 50);
  
    // Ogen
    fill(0);
    ellipse(xJOS - 10, yJOS - 10, 10, 10);
    ellipse(xJOS + 10, yJOS - 10, 10, 10);
  
    // Mond
    noFill();
    stroke(0);
    arc(xJOS, yJOS + 10, 20, 10, 0, PI);
  
    // Lichaam
    line(xJOS, yJOS + 25, xJOS, yJOS + 75);
    line(xJOS, yJOS + 75, xJOS - 20, yJOS + 100);
    line(xJOS, yJOS + 75, xJOS + 20, yJOS + 100);
  
    // Armen
    line(xJOS, yJOS + 40, xJOS - 20, yJOS + 50);
    line(xJOS, yJOS + 40, xJOS + 20, yJOS + 50);
  
    // Benen
    line(xJOS, yJOS + 75, xJOS - 20, yJOS + 100);
    line(xJOS, yJOS + 75, xJOS + 20, yJOS + 100);
  }
  