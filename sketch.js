let pigeon;  
let interaction;  
let bgColor; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();  

  // Initializes the pigeon and interaction instance
  pigeon = new Pigeon();
  interaction = new Interaction();
  bgColor = color(251, 244, 236); 
}

function draw() {
  background(bgColor); 
// draw pigeon
  pigeon.draw();  
//draw interation
  interaction.drawInstructions();  
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
    translate(windowWidth / 3.5, windowHeight / 7);
    scale(this.scale);
    translate(this.bodyOffsetX, this.bodyOffsetY);
    noFill();
    stroke(this.outlineColor);
    strokeWeight(2);


    this.drawBody();
    this.drawLeaves();
    this.drawBeak();
    this.drawEyes();
    pop();
  }

  // pigeon body
  drawBody() {
    // pigeon head and chest
    bezier(300, 180, 350, 148, 362, 138, 370, 120);
    bezier(370, 120, 392, 83, 429, 98, 440, 100);
    bezier(440, 100, 458, 99, 470, 110, 480, 109);
    bezier(480, 109, 447, 118, 440, 159, 440, 180);
    bezier(440, 180, 440, 280, 372, 328, 340, 340);

    //wing the above
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

  // leaves
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

  // beak
  drawBeak() {
    stroke(this.outlineColor);
    line(446, 117, 480, 109);
  }

  // eyes
  drawEyes() {
    fill(this.eyeColor);
    ellipse(425 + this.eyeOffsetX, 112 + this.eyeOffsetY, 5, 5);
    noFill();
    stroke(this.outlineColor);
    strokeWeight(2);
    ellipse(425, 112, 12, 12);
  }



  // Adjust the pigeon offset according to the mouse
  move(x, y) {
    this.eyeOffsetX = constrain(map(x, 0, width, -3, 3), -3, 3);
    this.eyeOffsetY = constrain(map(y, 0, height, -3, 3), -3, 3);
    this.bodyOffsetX = map(x, 0, width, -10, 10);
    this.bodyOffsetY = map(y, 0, height, -10, 10);
    this.leafOffsetX = map(x, 0, width, -5, 5);
    this.leafOffsetY = map(y, 0, height, -5, 5);
    redraw();
  }



  // Adjust the scale of the pigeon
  scaleChange(delta) {
    this.scale = constrain(this.scale + delta * -0.001, 0.5, 2);
    redraw();
  }

  // random color
  changeColor() {
    this.outlineColor = color(random(0, 255), random(0, 255), random(0, 255));
    this.eyeColor = color(random(0, 255), random(0, 255), random(0, 255));
    redraw();
  }
}

// Interactive classes that handle events and instructions
class Interaction {
  drawInstructions() {
    fill(0);
    textSize(10);
    textAlign(CENTER);
    text("Click to change the pigeon outline color", width / 2, height - 25);
    text("Move the mouse to move pigeon", width / 2, height - 15);
    text("Scroll to zoom in/out pigeon", width / 2, height - 5);
  }
}

// Mouse move,pigeon move
function mouseMoved() {
  pigeon.move(mouseX, mouseY);
}

//mouse scroll, pigeon zoom in/out
function mouseWheel(event) {
  pigeon.scaleChange(event.delta);
}

// mouse click, pigeon change color
function mousePressed() {
  pigeon.changeColor();
}
