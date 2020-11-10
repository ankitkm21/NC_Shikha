
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObj=new roof();

	
	bobObject1=new bob(300,300);
	bobObject2=new bob(350,300);
	bobObject3=new bob(400,300);
	bobObject4=new bob(450,300);
	bobObject5=new bob(500,300);
	
	


	rope1=new rope(bobObject1.body,roofObj.body,-100);
	rope2=new rope(bobObject2.body,roofObj.body,-50);
	rope3=new rope(bobObject3.body,roofObj.body,0);
	rope4=new rope(bobObject4.body,roofObj.body,50);
	rope5=new rope(bobObject5.body,roofObj.body,100);

	
	// Engine.run(engine);

	
}


function draw() {
	background("Lightskyblue");
  rectMode(CENTER);
  background(230);
  roofObj.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 }

function keyPressed() {
  	if (keyCode === UP_ARROW)  {
		console.log("Button pressed")
    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100});

  	}
}







