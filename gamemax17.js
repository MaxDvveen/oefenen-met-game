function setup() {
    createCanvas(800, 600);
  }
  
  function draw() {
    background(240);
  
    // Teken huis
    tekenHuis();
  
    // Teken bomen
    tekenBoom(50);
    tekenBoom(150);
    tekenBoom(250);
  
    // Teken zon
    tekenZon(500, 1);
  }
  
  function tekenHuis() {
    push();
    strokeWeight(4);
    stroke('darkgrey');
    fill('lightgray');
    rect(100, 180, 100, 100);

    pop();
  }
  
  function tekenBoom(x) {
    push();
    noStroke();
    fill('sienna');
    rect(x, 130, 40, 130);
    fill('olive');
    ellipse(x + 20, 130, 100, 150);
    pop();
  }
  
  function tekenZon(x, s) {
    push();
    fill('red');
    scale(s);
    ellipse(x, 200, 300, 300);
    pop();
  }
  