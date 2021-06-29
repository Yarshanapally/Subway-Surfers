

var path, pathImage;

var boy, boyImage;

var leftBoundry, rightBoundry


function preload(){
  //pre-load images
  pathImage= loadImage("path.png")
  
  boyImage= loadAnimation("jake1.png", "jake2.png", "jake3.png", "jake4.PNG", "jake5.png")
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  path=createSprite(200,200)
  path.addImage(pathImage);
  path.velocityY = 6;
  path.scale= 1.1
  
  boy=createSprite(200,300);
  boy.addAnimation("boy_running", boyImage);
  
   rightBoundry=createSprite(400,0,100,800);
rightBoundry.visible = false
  
   leftBoundry=createSprite(0,0,100,800);
leftBoundry.visible = false
  
  
  
  
}

function draw() {
  background(0);
  if(path.y > 400){
    path.y = height/2;
  }
  edges = createEdgeSprites();
  
  boy.collide(edges[3])
  
  boy.x = World.mouseX;
  
  boy.collide(rightBoundry);
  
  boy.collide(leftBoundry);
  
  

  
  drawSprites();
}
