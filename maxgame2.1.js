function setup() {
    canvas = createCanvas(500,500);
    background('grey');
    canvas.parent('processing');
    noLoop();
  }
  
  function draw() {

    fill('pink');
    triangle(100, 300, 250, 100, 400, 300);
  

    fill('purple');
    triangle(100, 300, 250, 500, 400, 300);
  }
  