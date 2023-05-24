function setup() {
    createCanvas(500, 500);
  }
  function draw() {
    background(66, 1, 31);
    console.log("x: " + mouseX + " y:" + mouseY);
    noStroke();
    fill(137, 2, 64);
    quad(89, 117,41, 401, 423, 451,440, 119);
    fill(168, 25, 90);
    quad(46, 150, 94, 429, 453, 397, 391, 94);
    fill(214, 74, 138);
    quad(23, 209, 165, 441, 467, 335, 317, 86);
    fill(239, 122, 175);
    quad(27, 265, 244, 438, 452, 257, 232, 89);
    fill(236, 184, 208);
    quad(45, 295, 296, 399, 417, 202, 179, 110);
    stroke(254, 213, 232 );
    strokeWeight(5);
    line(1, 37, 500, 488);
    stroke(254, 213, 232 );
    strokeWeight(5);
    line(498, 0, 0, 497);
  }
  // inspirado en obra de zanis waldheims ! 