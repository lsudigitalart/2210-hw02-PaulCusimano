// Paul Cusimano Image 16
let img;

// Load the image.
function preload() {
  img = loadImage('/images/lich_16.png');
}

function setup() {
  createCanvas(400, 269);
  background(230,231,223,255);
  drawThumb(286, 243);
  drawSteeringwheel();
  drawFinger(135, 200);
  drawFinger(92, 260);
  drawBackgroundPattern();
  drawLines();
  // tint(255, 128);
  // image(img, 0, 0);
}


function drawThumb(x, y) {
  strokeWeight(8);
  stroke(9,10,14,255);
  fill(255,232,220,255)
  push();
  angleMode(DEGREES);
  translate(x, y);
  rotate(28);
  rect(-30, -30, 60, 60, 25);
  pop();
}

function drawFinger(x, y) { 
  strokeWeight(8);
  stroke(9,10,14,255);
  fill(255,232,220,255)
  push();
  angleMode(DEGREES);
  translate(x, y); 
  rotate(28);
  rect(-30, -30, 200, 80, 20);
  pop();
}

function drawSteeringwheel() {
  angleMode(DEGREES);
  noStroke();

  noFill();
  stroke(9,10,14,255);
  strokeWeight(50);
  strokeCap(SQUARE);

  arc(540, 297, 633, 575, 0, 270);
  strokeCap(ROUND);

}

// The comic book background patterns
function drawBackgroundPattern() {
  let dotSize = 2;
  let spacing = 4;
  for (let y = 0; y < height; y += spacing) {
    for (let x = 0; x < width; x += spacing) {
      noStroke();
      fill(9,10,14,255);
      ellipse(x + (y / spacing % 2) * (spacing / 2), y, dotSize, dotSize);
    }
  }
}

// Just the basic line/rectangular shapes in the image
function drawLines() {
  stroke(230,231,223,255);
  strokeWeight(35);
  line(166+20, 0, 210+20, 269);
  strokeWeight(6);
  line(0, 70, 190, 70);

  stroke(9,10,14,255)

  strokeWeight(7);
  line(165, 0, 210, 269);
  line(166+40, 0, 210+41, 269);
  strokeWeight(12);
  line(0, 132 , 183, 130);
  strokeWeight(4);
  line(0, 41 , 166, 41);
  strokeWeight(23);
  line(305, 0, 424, 140);
  strokeWeight(26);
  line(355, 0, 400, 269);
}