
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var d1, d2, d3, paperObject,groundObject, dustIMG, dust;	
var world;

function preload(){
	dustIMG = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paperObject=new paper(200,450,70);
	groundObject=new ground(width/2,680,width,20);
	//Create a Ground

	Engine.run(engine);
	d1=new dustbin(1200,640,200,20);
	d2=new dustbin(1100,600,20,100);
	d3=new dustbin(1300,600,20,100);

	dust=createSprite(1200, 570, 100,100);
	dust.addImage(dustIMG);
	dust.scale=0.6;
}


function draw() {
  rectMode(CENTER);
  background("grey");
 
  paperObject.display();
  d1.display();
  d2.display();
  d3.display();
  dust.display();
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:1100,y:-1100});
    
  	}
}





