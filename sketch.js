// Emilie Pitre ©2016

var fillR;
var fillG;
var fillB;

var rotateWing;

var bee1
var bee2
var bee3
var bee4
var bee5
var bee6

function setup() {
  createCanvas(700, 500);
  frameRate(60);

  beeSpeed = random (1, 2);
  bee1 = new Bee(100, 250, 150, 50, beeSpeed);

  beeSpeed = random (1, 2);
  bee2 = new Bee(200, 200, 100, 0, beeSpeed);

  beeSpeed = random (1, 2);
  bee3 = new Bee(300, 150, 150, 150, beeSpeed);

  beeSpeed = random (1, 2);
  bee4 = new Bee(400, 250, 50, 50, beeSpeed);

  beeSpeed = random (1, 2);
  bee5 = new Bee(500, 250, 100, 100, beeSpeed);

  beeSpeed = random (1, 2);
  bee6 = new Bee(600, 200, 150, 100, beeSpeed);


}

function draw() {
  background(40, 80, 40);
  rectMode(CENTER);

  push();
  for(x = 0; x < 1000; x = x + 50){
    noStroke();
    fill(30, 60, 30);
    ellipse(x, 40, 100, 150)
  }

  for(x = 0; x < 1000; x = x + 90){

    noStroke();
    fill(20, 50, 30);
    ellipse(x, 50, 80, 30)
    fill(255, 10, 10);
    ellipse(x, 50, 50, 50);
    fill(200, 10, 10);
    ellipse(x + 2, 52, 40, 40);
    fill(255, 10, 10);
    ellipse(x - 1, 50, 35, 35);
    fill(230, 10, 10);
    ellipse(x - 4, 50, 20, 20);
    fill(255, 10, 10);
    ellipse(x + 1, 50, 15, 15);
  }
  pop();

  bee1.display();
  bee1.move();
  bee1.interact();

  bee2.display();
  bee2.move();
  bee2.interact();

  bee3.display();
  bee3.move();
  bee3.interact();

  bee4.display();
  bee4.move();
  bee4.interact();

  bee5.display();
  bee5.move();
  bee5.interact();

  bee6.display();
  bee6.move();
  bee6.interact();

  textFont("Arial")
  textAlign(CENTER);
  textSize(20);
  fill(80, 160, 80);
  text("CLICK ANYWHERE TO RESTART RACE", width/2, 20);
}

function Bee(tempXPos, tempFillR, tempFillG, tempFillB, tempSpeed){

  this.xPos = tempXPos;
  this.fillR = tempFillR;
  this.fillG = tempFillG;
  this.fillB = tempFillB;
  this.speed = tempSpeed;
  var yPos = height;

  this.display = function(){
    // bee drawing
    push();
    translate(this.xPos, yPos);
    scale(0.25, 0.25);

    noStroke();
    fill(0);
    ellipse(0, -20, 30, 20); //head
    ellipse(0, 30, 40, 60); //abdomen

    fill(this.fillR, this.fillG, this.fillB);
    rect (0, 30, 40, 16); //abdomen stripe

    push();
    stroke(0);
    strokeWeight(2);
    noFill();
    ellipse(0, 30, 40, 60); //abdomen stroke
    pop();

    noStroke();
    fill(0);
    ellipse(0, 0, 40, 40); //thorax

    fill(this.fillR, this.fillG, this.fillB);
    rect (0, 0, 40, 10); //thorax stripe

    push();
    stroke(0);
    strokeWeight(2);
    noFill();
    ellipse(0, 0, 40, 40); //thorax stroke
    pop();

    rotateWing = random(2.5, 4);

    fill(this.fillR, this.fillG, this.fillB, 100);

    push(); //right wing
    translate(10, 0);
    rotate(2*PI/rotateWing);
    ellipse(0, -40, 20, 60);
    pop();

    push(); //left wing
    translate(-10, 0);
    rotate(-(2*PI/rotateWing));
    ellipse(0, -40, 20, 60);
    pop();
    pop();
  };

  this.move = function() {
    yPos = yPos - this.speed;

  };

  this.interact = function(){
    if(mouseIsPressed){
      yPos = height
      this.speed = random (1, 2);
    }
  };
}
