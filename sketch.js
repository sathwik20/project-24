const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world

var ball,dustbin,ground;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

ball=new Ball(100,600,10)

ground= new Ground(400,680,800,20)

dustbinpart1=new Dustbin(550,620,20,100)
dustbinpart2=new Dustbin(610,660,100,20)
dustbinpart3=new Dustbin(670,620,20,100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
Engine.update(engine)

ball.display()
ground.display()
dustbinpart1.display()
dustbinpart2.display()
dustbinpart3.display()


  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15})
}

}

