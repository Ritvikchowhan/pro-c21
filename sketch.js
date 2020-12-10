var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(800,400);
 
  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50),
  car.velocityX=speed;
  car.shapeColor=(255);

 wall=createSprite(1500,200,60,height/2);
 wall.shapeColor=(80,80,80);




}

function draw() {
  background(255,255,255);  

  function hasCollided(bullet,wall)
  {
    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false;
  }
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10)
    {
      wall.shapeColor=(255,0,0);
    }


    if(damage<10)
    {
      wall.shapeColor=(0,255,0);
    }

  }
   drawSprites();
  } 





