
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  Monkey=createSprite(80,350,20,10)
  Monkey.addAnimation("monkeyimage",monkey_running)
  Monkey.scale=0.1
  
  ground=createSprite(400,360,900,10)
  ground.velocityX=-5
  foodGroup=new Group()
  obstaclesGroup=new Group()
}


function draw() {
  background("white")
  
  if(ground.x<0){
     ground.x=ground.width/2
     }
  if(keyDown("space")){
     Monkey.velocityY=-10
     }
  Monkey.velocityY=Monkey.velocityY+0.8
  Monkey.collide(ground)
  
  spawnFood()
  spawnObstacles()
  if(obstaclesGroup.isTouching(Monkey)){
    ground.velocityX=0;
    Monkey.velocityY=0;
    obstaclesGroup.setVelocityXEach(0)
    obstaclesGroup.setLifetimeEach(-1)
    
   foodGroup.setVelocityXEach(0)
  foodGroup.setLifetimeEach(-1)
  }
  
  
  
  drawSprites();
textSize(20)
survivalTime=Math.ceil(frameCount/frameRate())
text("SURVIVAL TIME="+survivalTime,100,50)
}
function spawnFood(){
   if(frameCount%80===0){
      banana=createSprite(600,300,40,30)
      banana.addImage(bananaImage)
      banana.y=Math.round(random(120,250))
     banana.velocityX=-5
      banana.scale=0.05
      banana.lifetime=300
     
     foodGroup.add(banana)
     
      Monkey.depth=banana.depth+1
     
     
      }
  
  
  
}

function spawnObstacles(){
   if(frameCount%300===0){
      Obstacles=createSprite(600,340,40,30)
      Obstacles.addImage(obstaceImage)
      
    Obstacles.velocityX=-5
      Obstacles.scale=0.15
      Obstacles.lifetime=300
     
     obstaclesGroup.add(Obstacles)
   }   
}



