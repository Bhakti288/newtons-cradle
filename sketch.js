
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

paper,dustbin1,dusbin2,dustbin3,ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper (150,300,10);
	ground= new Ground(400,700,750,10);
	dustbin1= new Dustbin (650,650,60,20);
	dustbin2= new Dustbin (630,640,20,60);
	dustbin3= new Dustbin (670,640,20,60);

	paper.velocityX = 3;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  pround.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  keyPressed();
  drawSprites();
 
}
function keyPressed (){

	if (keyCode === "UP_ARROW"){

		Matter.Body.applyForce(paper.body,paper.position,{x:85,y:-85});
	}
}



