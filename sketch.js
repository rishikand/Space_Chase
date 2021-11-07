var canvas,bgImg;
var cop;
var copAnimation,copData;
var copImage=[];
var robber,robberImage;
var laser,laserImage;
var robberGroup,laserGroup;
var score=0

function preload(){
bgImg=loadImage("Images/Space_Background.jpeg");
copAnimation=loadImage("Images/Cop_Spaceship/Copspaceship.png");
robberImage=loadImage("Images/Robber.png");
laserImage=loadImage("Images/Laser.png");
}
function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    cop=createSprite(windowWidth-275,windowHeight-100,100,100);
    cop.addImage(copAnimation);
    cop.scale=0.7;
    robberGroup=createGroup();
    laserGroup=createGroup();
}

function draw(){
    background(bgImg);
    cop.y=World.mouseY;
    if(keyWentDown("q")){
        laser=createSprite(cop.x,cop.y,100,100);
        laser.addImage(laserImage);
        laser.velocityX=-5;
        laserGroup.add(laser);
        //laser.debug=true;
        laser.setCollider("rectangle",0,0,280,30);
    }
    if(robberGroup.isTouching(laser)){
        //robberGroup.destroyEach();
        robber.visible=false;
        score = score + 5;
    }
    spawnRobber();
    drawSprites();
    textSize(25);
    text("score: " + score, windowWidth/12,50);
}
function spawnRobber(){
    if(frameCount%60===0){
        robber=createSprite(windowWidth/8,random(windowHeight/8,windowHeight),100,100);
        robber.addImage(robberImage);
        robber.velocityX=5;
        robber.lifetime=windowWidth/5;
        robber.depth=cop.depth;
        robberGroup.add(robber);
        //robber.debug=true;
        robber.setCollider("circle",0,0,80);
    }
}