
var starship1;
var starship2;

function setup() {
  createCanvas(640, 480);
  starship1 = new Starship(10, 2, 50);
  starship2 = new Starship(20, 4, 170);
}

function draw() {
  background(0);
  starship1.display();
  starship1.move();
  starship1.interact();

  starship2.display();
  starship2.move();
  starship2.interact();
}

function Starship(tempWingspan, tempSpeed, tempXPosition) {

  this.wingspan = tempWingspan;
  this.speed = tempSpeed;
  this.xPosition = tempXPosition;
  var ey = 0;


  this.display = function() {
    ellipse(this.xPosition, ey, this.wingspan);
  };

  this.move = function() {
    ey = ey + this.speed;
  };

  this.interact = function() {
    if(mouseX > this.xPosition) {
      ey = 0;
    }
  };

}
