const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(250,480,500,20)
    platform=new Ground(400,450,200,20)
    block1=new Block(330,235,30,40)
    block2=new Block(360,235,30,40)
    block3=new Block(390,235,30,40)
    block4=new Block(420,235,30,40)
    block5=new Block(450,235,30,40)
    block6=new Block(360,195,30,40)
    block7=new Block(390,195,30,40)
    block8=new Block(420,195,30,40)
    block9=new Block(390,155,30,40)
    block10=new Block(390,110,30,40)
    polygon=new Polygon(100,400,50,50)

   chain=new Chain(polygon.body,{x:100,y:50})
}

function draw(){
    background("red");
    Engine.update(engine);
    strokeWeight(4);
    ground.display()
    platform.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    polygon.display()
    chain.display()

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    polygon.fly();
}
