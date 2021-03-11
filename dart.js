
class Dart{
    constructor(x,y,radius){
        var options={
            isStatic:false
        }
        this.body=Bodies.circle(x,y,20,options)
        this.radius=20
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("yellow");
        ellipse(pos.x, pos.y, this.radius,this.radius);
    }
    }
    