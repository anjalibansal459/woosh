const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint 
var engine,world 
var Bimage,base,leftbase,rightbase,slingshot
var pole1,pole2,pole3,pole4
var ninja,monster1,monster2,monster3
var dart1,dart,dart3,dart4,dart5,dart6
function preload(){
Bimage=loadImage("bbg.png")
}

function setup(){
  createCanvas(1000,600)
engine=Engine.create()
world=engine.world
pole1=new Pole(100,450,50,300)
pole2=new Pole(400,500,50,200)
pole3=new Pole(850,380,50,450)
ple4=new Pole(600,430,50,350)
ninja=new Ninja(100,250,50,50)
monster1=new Monster(400,360,50,50)
monster2=new Monster(600,150,50,50)
monster3=new Monster(850,50,50,50)
dart1=new Dart(400,20,20,20)
dart2=new Dart(410,10,20,20)
dart3=new Dart(420,30,20,20)
dart4=new Dart(430,40,20,20)
dart5=new Dart(440,10,20,20)
dart6=new Dart(380,25,20,20)
base=new Ground(400,130,100,5)
leftbase=new Ground(350,60,5,150)
rightbase=new Ground(450,60,5,150)
slingshot=new Sling(dart1.body,{x:100,y:250})
}

function draw(){
  background(Bimage)
  Engine.update(engine)
  pole1.display()
pole2.display()
pole3.display()
ple4.display()
ninja.display()
monster1.display()
monster3.display()
monster2.display()
dart1.display()
dart2.display()
dart3.display()
dart4.display()
dart5.display()
dart6.display()
leftbase.display()
rightbase.display()
base.display()
slingshot.display()
}