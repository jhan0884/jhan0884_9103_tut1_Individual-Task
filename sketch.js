let pigeon;
let interaction;
let bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Initializes the pigeon and interaction instance
  bgColor = color(251, 244, 236);  
  pigeon = new Pigeon();
  interaction = new Interaction();
}

function draw() {
  background(bgColor);
  
  drawWaves();  // draw waves
  pigeon.draw();  // draw pigeon
  interaction.drawInstructions();  // draw instruction text
}

//draw waves
function drawWaves() {
  stroke(100, 180, 255, 150);  
  strokeWeight(1.5);
  noFill();

  let waveHeight = height * 0.8;  

  for (let i = 0; i < 10; i++) {  // Set the number of waves
    beginShape();
    for (let x = 0; x < width; x += 20) {
      let y = sin((x * 0.02 + i * 0.5)) * 10 + waveHeight + i * 10;  
      vertex(x, y);
    }
    endShape();
  }
}




// Pigeon class, including pigeon drawing and related properties
class Pigeon {
  constructor() {
    this.eyeOffsetX = 0;
    this.eyeOffsetY = 0;
    this.bodyOffsetX = 0;
    this.bodyOffsetY = 0;
    this.leafOffsetX = 0;
    this.leafOffsetY = 0;
    this.scale = 1;  
    this.outlineColor = color(142, 144, 171);  
    this.eyeColor = color(0); 
    this.eyeSocketColor = color(42, 48, 72); 
  }

  draw() {
    push();
    translate(windowWidth / 3.5, windowHeight / 7);  // set pigeon's position
    scale(this.scale);  // set scalling
    translate(this.bodyOffsetX, this.bodyOffsetY);  //Application displacement
    noFill();
    stroke(this.outlineColor);
    strokeWeight(2);

    this.drawBody();  
    this.drawLeaves();  
    this.drawBeak();  
    this.drawEyes();  
    pop();
  }

  drawBody() {
    //  pigeon head and chest
    bezier(300, 180, 350, 148, 362, 138, 370, 120);
    bezier(370, 120, 392, 83, 429, 98, 440, 100);
    bezier(440, 100, 458, 99, 470, 110, 480, 109);
    bezier(480, 109, 447, 118, 440, 159, 440, 180);
    bezier(440, 180, 440, 280, 372, 328, 340, 340);

    // wing the above
    bezier(20, 40, 160, 18, 323, 116, 372, 172);
    bezier(20, 40, 20, 60, 70, 69, 83, 80);
    bezier(83, 80, 0, 98, 28, 108, 100, 120);
    bezier(100, 120, 18, 141, 3, 160, 80, 160);
    bezier(80, 160, 52, 186, 90, 186, 100, 186);
    bezier(100, 186, 90, 186, 80, 218, 120, 230);
    bezier(120, 230, 138, 238, 182, 223, 190, 218);

    // wing the below
    bezier(212, 276, 179, 313, 239, 264, 200, 305);
    bezier(194, 312, 152, 376, 239, 301, 192, 348);
    bezier(192, 348, 125, 438, 138, 442, 230, 370);
    bezier(230, 370, 145, 448, 190, 442, 220, 425);
    bezier(220, 425, 330, 371, 383, 298, 330, 220);
    bezier(330, 220, 318, 202, 281, 208, 300, 230);

    // tail
    bezier(230, 180, 209, 256, 20, 283, 7, 263);
    bezier(7, 263, 6, 303, 24, 322, 60, 296);
    bezier(60, 296, 24, 322, 10, 376, 100, 315);
    bezier(100, 315, 43, 369, 51, 408, 103, 343);
    bezier(103, 343, 82, 398, 95, 435, 176, 314);
  }


  //leaves
  drawLeaves() {
    fill(26, 119, 75);
    stroke(26, 119, 75);
    strokeWeight(2);
    bezier(440 + this.leafOffsetX, 46 + this.leafOffsetY, 460 + this.leafOffsetX, 100 + this.leafOffsetY, 490 + this.leafOffsetX, 96 + this.leafOffsetY, 440 + this.leafOffsetX, 46 + this.leafOffsetY);
    bezier(479 + this.leafOffsetX, 30 + this.leafOffsetY, 452 + this.leafOffsetX, 75 + this.leafOffsetY, 479 + this.leafOffsetX, 96 + this.leafOffsetY, 479 + this.leafOffsetX, 30 + this.leafOffsetY);
    bezier(500 + this.leafOffsetX, 40 + this.leafOffsetY, 458 + this.leafOffsetX, 80 + this.leafOffsetY, 470 + this.leafOffsetX, 100 + this.leafOffsetY, 500 + this.leafOffsetX, 40 + this.leafOffsetY);
    bezier(497 + this.leafOffsetX, 70 + this.leafOffsetY, 443 + this.leafOffsetX, 91 + this.leafOffsetY, 485 + this.leafOffsetX, 94 + this.leafOffsetY, 498 + this.leafOffsetX, 70 + this.leafOffsetY);
    noFill();
    strokeWeight(1.5);
    bezier(468 + this.leafOffsetX, 70 + this.leafOffsetY, 472 + this.leafOffsetX, 92 + this.leafOffsetY, 468 + this.leafOffsetX, 96 + this.leafOffsetY, 462 + this.leafOffsetX, 103 + this.leafOffsetY);
    bezier(462 + this.leafOffsetX, 121 + this.leafOffsetY, 464 + this.leafOffsetX, 136 + this.leafOffsetY, 470 + this.leafOffsetX, 138 + this.leafOffsetY, 470 + this.leafOffsetX, 158 + this.leafOffsetY);
  }

  drawBeak() {
    stroke(this.outlineColor);
    line(446, 117, 480, 109);  
  }

  drawEyes() {
    fill(this.eyeColor);
    ellipse(425 + this.eyeOffsetX, 112 + this.eyeOffsetY, 5, 5);  
    noFill();
    stroke(this.outlineColor);
    strokeWeight(2);
    ellipse(425, 112, 12, 12);  
  }
}

class Interaction {
  drawInstructions() {
    fill(0);
    textSize(10);
    textAlign(CENTER);
    text("Click to change pigeon color", width / 2, height - 25);
    text("Move mouse to move pigeon", width / 2, height - 15);
    text("Scroll mouse to zoom in/ out the pigeon", width / 2, height - 5);
  }
}

// Mouse move,pigeon move
function mouseMoved() {
  pigeon.eyeOffsetX = constrain(map(mouseX, 0, width, -3, 3), -3, 3);
  pigeon.eyeOffsetY = constrain(map(mouseY, 0, height, -3, 3), -3, 3);
  pigeon.bodyOffsetX = map(mouseX, 0, width, -10, 10);
  pigeon.bodyOffsetY = map(mouseY, 0, height, -10, 10);
  pigeon.leafOffsetX = map(mouseX, 0, width, -5, 5);
  pigeon.leafOffsetY = map(mouseY, 0, height, -5, 5);
  redraw();
}

//  mouse click, pigeon change color
function mousePressed() {
  pigeon.outlineColor = color(random(0, 255), random(0, 255), random(0, 255));
  pigeon.eyeColor = color(random(0, 255), random(0, 255), random(0, 255));
  redraw();
}

// mouse scroll, pigeon zoom in/out
function mouseWheel(event) {
  pigeon.scale += event.delta * -0.001;  
  pigeon.scale = constrain(pigeon.scale, 0.5, 2);  
  redraw();
}
