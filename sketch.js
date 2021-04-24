
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roofObject = new roof(400,200,600,50)
	bobObject1 = new bob(200,400)
	bobObject2 = new bob(300,400)
	bobObject3 = new bob(400,400)
	bobObject4 = new bob(500,400)
	bobObject5 = new bob(600,400)
	rope1=new rope(bobObject1.body,roofObject.body,-100*2,0)
	rope2=new rope(bobObject2.body,roofObject.body,-50*2,0)
	rope3=new rope(bobObject3.body,roofObject.body, 0,0)
	rope4=new rope(bobObject4.body,roofObject.body, 50*2,0)
	rope5=new rope(bobObject5.body,roofObject.body, 100*2,0)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()

  roofObject.display()

 keyPressed()

  drawSprites();
 
}

function keyPressed(){ 
	if(keyDown("left_arrow")){ 
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:0}); 
	} 
}


