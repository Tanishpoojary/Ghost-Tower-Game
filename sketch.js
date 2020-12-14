var ground,groundImage
var door,doorImage
var doorGroup;
var climber,climberImage
var climberGroup;
var ghost,ghostImage;
var inBlock;
var inBlockGroup;
var gameState ="play"


function preload(){
 groundImage =loadImage("tower.png");
 doorImage =loadImage("door.png") 
  climberImage =loadImage("climber.png")
  ghostImage =loadImage("ghost-standing.png")
}

function setup(){
createCanvas(600,600);
 ground =createSprite(300,300)
  ground.addImage(groundImage)
  ground.velocityY =1;
  
  
  doorGroup = new Group();
  climberGroup = new Group();
  
  ghost =createSprite(300,300);
  ghost.addImage(ghostImage);
  ghost.scale =0.4;
  
  inBlockGroup = new Group();
  
  
}

function draw(){
background(0); 
  
  if(gameState === "play"){
    
    
    
  
  
  if(ground.y>400){
    ground.y=300
  }
  
  if(keyDown("space")){
   ghost.velocityY =-5; 
  }
  
  if(keyDown("right_arrow")){
    ghost.x =ghost.x +3
  }
  
  if(keyDown("left_arrow")){
    ghost.x =ghost.x -3
  }
  
  ghost.velocityY =ghost.velocityY + 0.8
  
  if(climberGroup.isTouching(ghost)){
   ghost.velocityY =0;
  }              
  
  spawnDoors();
  if(inBlockGroup.isTouching(ghost) || ghost.y>600){
    ghost.destroy()
    gameState = "end"
  }
  
drawSprites();
} 
  if(gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over",230,250)
  }
}

function spawnDoors(){
  if(frameCount %240 === 0){   
door=createSprite(200,-50);
  door.addImage(doorImage);
  door.velocityY =1;
    door.x =Math.round(random(150,400))
    
    door.lifetime =600;
    
    doorGroup.add(door);
    
    climber =createSprite(200,10);
    climber.addImage(climberImage);
    climber.velocityY =1;
    
    climber.x = door.x 
    
    climber.lifetime =600;
    
    climberGroup.add(climber);
    
    ghost.depth =door.depth
    ghost.depth =ghost.depth +1
    
    inBlock =createSprite(200,15,climber.width,2);
    inBlock.velocityY =1;
    inBlock.lifetime =600
    inBlockGroup.add(inBlock)
    inBlock.x = climber.x
    
  }
  
  
}

