var canvas,bgImg;
var cop;
var copAnimation,copData;
var copImage=[];

function preload(){
bgImg=loadImage("Images/Space_Background.jpeg");
copAnimation=loadImage("Images/Cop_Spaceship/Cop_Spaceship.png");
copData=loadJSON("Images/Cop_Spaceship/Cop_Spaceship.json");
}
function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    cop=createSprite(displayWidth/4-50,displayHeight-100,100,100);
    var copFrames=copData.frames;
    for(var i=0;i<copFrames.length;i++){
        var pos=copFrames[i].position;
        var img=copAnimation.get(pos.x,pos.y,pos.w,pos.h);
        copImage.push(img);
    }
    cop.addImage(copImage);
}

function draw(){
    background(bgImg);
    cop.y=World.mouseY;
    drawSprites();
}