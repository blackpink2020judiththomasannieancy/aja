var a

function setup() {

  createCanvas(800,400);
 a= createSprite(400, 200, 50, 50);
 b=createSprite (200,200,50,50);
 c=createSprite(250,200,50,10);
 d=createSprite(100,250,50,10);
 a.shapeColor="pink"
 a.velocityX=-3;
 
 b.shapeColor="black"
 b.velocityX=3;

}

function draw() {
  background(255,255,255);  
  drawSprites();
  bof(a,b)
 if(isTouching(a,b)){
  a. shapeColor="red"
  b.shapeColor="green"
  
 }
 else{
  a.shapeColor="pink"
  b.shapeColor="black"
 }
}

function isTouching(a,b){
if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2 &&a.y-b.y<a.height/2+b.height/2 && b.y-a.y<a.height/2+b.height/2 ){
 return true; 
}

else{return false;}
}
function bof(a,b){
 if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2){
   a.velocityX=a.velocityX*-1
   b.velocityX=b.velocityX*-1
 }
 if(a.y-b.y<a.height/2+b.height/2 && b.y-a.y<a.height/2+b.height/2){
  a.velocityY=a.velocityY*-1
  b.velocityY=b.velocityY*-1

 }
 

}






