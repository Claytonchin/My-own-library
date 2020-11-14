var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 30, 80);
  movingRect = createSprite(400, 200, 80, 30);
  fixedRect.shapeColor = "yellow";
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "yellow";

  gameObject2= createSprite(250, 100, 50, 50);
  gameObject2.shapeColor = "red";

  gameObject3 = createSprite(400, 100, 50, 50);
  gameObject3.shapeColor = "yellow";

  gameObject4 = createSprite(550, 100, 50, 50);
  gameObject4.shapeColor = "yellow";

  //fixedRect.debug = true;
  //movingRect.debug = true;

  gameObject2.velocityX = 2;
  gameObject3.velocityX = -2;

}

function draw() {
  background(123,129,255);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(gameObject1, movingRect)){
    gameObject4.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  } 
  else {
    gameObject4.shapeColor = "yellow";
    movingRect.shapeColor = "green";
  }

  bounceOff(gameObject2, gameObject3);
  
  drawSprites();
}

