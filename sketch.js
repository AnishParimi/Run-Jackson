var path;
var pathImg;
var Runner;
var RunnerImg;
var leftBoundary;
var rightBoundary; 
function preload(){
  //pre-load images
  pathImg=loadImage("path.png")
  RunnerImg=loadAnimation ("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY=4;
  path.scale=1.2
 
  Runner=createSprite(200,340,10,10)
  Runner.addAnimation("Runner Img",RunnerImg)
  Runner.scale=0.1

  leftBoundary=createSprite(20,200,20,400)
  leftBoundary.visible=false
  
  rightBoundary=createSprite(380,200,20,400)
  rightBoundary.visible=false
}

function draw() {

  Runner.collide(leftBoundary)
  Runner.collide(rightBoundary)
  

Runner.x=mouseX;

  background(0);
drawSprites()

if(path.y>400){
  path.y=height/2
}

}
