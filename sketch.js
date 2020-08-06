var movingRect,fixedRect;
function setup() {
  createCanvas(800,400);
  //create the rectangle sprites
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(200, 200, 50, 80);
  //make the shape color red
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}

function draw() {
  //make the background black
  background(0)
  //make the rectangle move with mouse
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect,fixedRect))
  {
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  else
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  drawSprites();
}


