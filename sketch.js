
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;
let engine;

	var ball;
	var groundObj;
	var leftSide;
	var rightSide;

function preload()
{
}

function setup() {
	createCanvas(800, 700);



	
	
	engine = Engine.create();
	world = engine.world;

	var options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(200, 200, 10, options);
	World.add(world, ball);
	groundObj = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(520, 638, 7, 55);
	rightSide = new Ground(670, 638, 7, 55);
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
	groundObj.show();
	leftSide.show();
	rightSide.show();

	ellipse(ball.position.x, ball.position.y, 20, 20);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x:0,y:0}, {x:5,y:5});
	}	
}


