const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roof;
var rope1,rop2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof();

	bobObject1 = new Bob(275,400,30);
	rope1 = new Rope(bobObject1.body,roof.body,0);

	bobObject2 = new Bob(225,400,30);
	rope2 = new Rope(bobObject2.body,roof.body,-60);

	bobObject3 = new Bob(325,400,30);
	rope3 = new Rope(bobObject3.body,roof.body,60);

	bobObject4 = new Bob(375,400,30);
	rope4 = new Rope(bobObject4.body,roof.body,120);

	bobObject5 = new Bob(175,400,30);
	rope5 = new Rope(bobObject5.body,roof.body,-120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  roof.display();
  
  rope1.display();
  bobObject1.display();

  rope2.display();
  bobObject2.display();

  rope3.display();
  bobObject3.display();

  rope4.display();
  bobObject4.display();

  rope5.display();
  bobObject5.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Body.applyForce(bobObject5.body,bobObject5.body.position,{x:-250,y:100});
	}
}