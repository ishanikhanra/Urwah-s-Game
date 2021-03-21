var cannon;
var background;
var cannonIMG;
var landIMG;
var BD1;
var BD2;
var BD3;
var BD4;
var spawnObstacleGroup;


function preload() {
  cannonIMG=loadImage("canon.png");
  landIMG=loadImage("land.png");
  BD1=loadImage("building 1.jpg");
  BD2=loadImage("building 2.jpg");
  BD3=loadImage("building 3.jpg");
  BD4=loadImage("building 4.jpg");
}

function setup() {
  createCanvas(800,400);
  cannon= createSprite(400, 350, 50, 50); 
  cannon.addImage(cannonIMG);
  cannon.scale=0.1;
  
}

function draw() {
  background("lightblue"); 
  image(landIMG,-10,0,1000,600);
  spawnObstacleGroup(); 
  cannon.x=mouseX;
  drawSprites();
}

function spawnObstacleGroup() {
 if(frameCount % 30 === 0) {
   var building = createSprite(0,100,40,40);
   building.velocityX= 4;
   var rand = Math.round(random(1,4));
   switch(rand) {
     case 1: building.addImage(BD1);
            building.scale=0.20;
            break;
     case 2: building.addImage(BD2);
            building.scale=0.5;
            break;
     case 3: building.addImage(BD3);
            building.scale=0.5;
            break;
     case 4: building.addImage(BD4);
            building.scale=0.5;
     default: break;
   }

   
   building.lifetime = 400;
 }
}