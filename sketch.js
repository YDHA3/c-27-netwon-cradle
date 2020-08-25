var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

bob1,bob2,bob3,bob4,bob5;
ground1;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;
	bob1 = new Bob(350,310,13); 
	bob2 = new Bob(320,310,13);
	bob3 = new Bob(290,310,13);
	bob4 = new Bob(260,310,13);
	bob5 = new Bob(230,310,13);
	ground1 = new Ground(290,130,155,10);
	rope1 = new Rope(bob1.body,ground1.body,60,6.5);
	rope2 = new Rope(bob2.body,ground1.body,32,6.5);
	rope3 = new Rope(bob3.body,ground1.body,4,6.5);
	rope4 = new Rope(bob4.body,ground1.body,-28,6.5);
	rope5 = new Rope(bob5.body,ground1.body,-58,6.5);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //drawSprites();

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.body.applyForce(bob5.Body,bob5.Body.position,{x:85,y:-85})
	}

}

 
}



