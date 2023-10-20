function setup() {
    createCanvas(800, 600);
  }
  
  function draw() {
    background(240);
  
    // Versie 1
    translate(0, 160);
    tekenJos(75, height / 4);
  
    // Versie 2
    translate(0, 160);
    tekenJos(75, 2 * height / 4);
  
    // Versie 3
    translate(0, 160);
    tekenJos(75, 3 * height / 4);
  
    // Beweging
    if (x1 < width) {
      x1 += 3;
    }
  
    if (x2 < width) {
      x2 += 3;
    }
  
    if (x3 < width) {
      x3 += 3;
    }
  }
  
  function tekenJos(x, y) {
    // Hoofd
    fill(255, 204, 0);
    ellipse(x, y, 25, 25);
  
    // Ogen
    fill(0);
    ellipse(x - 5, y - 5, 5, 5);
    ellipse(x + 5, y - 5, 5, 5);
  
    // Mond
    noFill();
    stroke(0);
    arc(x, y + 5, 10, 5, 0, PI);
  
    // Lichaam
    line(x, y + 12.5, x, y + 37.5);
    line(x, y + 37.5, x - 10, y + 50);
    line(x, y + 37.5, x + 10, y + 50);
  
    // Armen
    line(x, y + 20, x - 10, y + 25);
    line(x, y + 20, x + 10, y + 25);
  
    // Benen
    line(x, y + 37.5, x - 10, y + 50);
    line(x, y + 37.5, x + 10, y + 50);
  }
  
  var x1 = 75;
  var x2 = 75;
  var x3 = 75;
  