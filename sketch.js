var movingRect, fixedRect;
var gameobject1, gameobject2;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 800, 80, 50);
  movingRect.shapeColor = "white"
  //movingRect.velocityY = - 5
  fixedRect  = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "white"
  //fixedRect.velocityY = + 5
  gameobject1 = createSprite(100,100,40,60);
  gameobject1.shapeColor = "white"
  gameobject2 = createSprite(200,100,40,60);
  gameobject2.shapeColor = "white"
  
}

function draw() {
  background(0); 
  console.log((movingRect.width + fixedRect.width)/2)
  //collide(movingRect,fixedRect)
  movingRect.x = mouseX
  movingRect.y = mouseY
  if(istouching(movingRect, fixedRect)){
    fixedRect.shapeColor = "red"
  }
  else{
    fixedRect.shapeColor = "white"
  }
  drawSprites();
}


