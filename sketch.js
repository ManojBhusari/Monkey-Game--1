var monkey,monkey_running;
var obstacle,obstacleImage,obstacleGroup;
var bananaGroup,bananaImage;
var ground;
var SurvivalTime;
function preload(){

monkey_running=loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png");
obstacleImage = loadImage("obstacle.png");
bananaImage = loadImage("banana.png");
 
}

function setup() {

createCanvas(600,600);

monkey = createSprite(80,315,20,20);
monkey.addAnimation("monkey",monkey_running);
monkey.scale = 0.1;

ground = createSprite(400,350,900,10);
ground.velocityX = -4;
ground.x = ground.width /2;
console.log(ground.x)

// Create obstacle and banana group
var obstacleGroup = new Group();
var bananaGroup = new Group();
  
SurvivalTime = 0;
  
}


function draw() {

background("yellow");
ground.visible = true;
SurvivalTime = SurvivalTime+Math.round(getFrameRate()/65);
stroke("white");
fill("black");
text("SurvivalTime: "+ SurvivalTime, 450,50)

  
if(ground.x<0){
  ground.x = ground.width/2;
}  

if(keyDown("space")&& monkey.y>314){
  monkey.velocityY = -10;
}

monkey.velocityY = monkey.velocityY+0.8;
monkey.collide(ground);

bananaGroup();
obstacleGroup();

  
 drawSprites()
//displaying score

}

function bananaGroup() {
  
  if(frameCount % 95 === 0){
    var banana = createSprite(400,300,50,50);
    banana.y = Math.round(random(200,250));
    banana.velocityX=-2;
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.lifetime=200;
    
  }
  
}


function obstacleGroup() {
  
  if(frameCount % 200 === 0){
    var obstacle = createSprite(400,310,50,50);
    obstacle.y=Math.round(random(250,350));
    obstacle.velocityX=-2;
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2
    obstacle.lifetime=200;
    
  }
  
}







