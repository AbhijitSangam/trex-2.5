var trex
var ani
var ground
var img
var road
var cloud
var cloudimg
function preload(){
ani= loadAnimation("trex1.png","trex3.png","trex4.png")
img= loadImage("ground2.png")
cloudimg=loadImage("cloud.png")
}


function setup(){
createCanvas(600,200)
trex= createSprite(50,150,20,20)
trex.addAnimation("pong",ani)
trex.scale=0.5

ground=createSprite(300,175,600,10)
ground.addImage(img)
ground.velocityX=-5
road=createSprite(300,190,600,10)
road.visible=false;

}

function draw(){
background("tan")
if(keyDown("space") && trex.y>160){
  trex.velocityY=-10
}
trex.velocityY=trex.velocityY+0.5
trex.collide(road) 
if (ground.x<-560) {
  ground.x=300;
}

cloud=createSprite(300,70,40,10)
cloud.scale=0.2
cloud.addImage(cloudimg)
cloud.velocityX=-3

drawSprites()
}
