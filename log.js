//class box
class Log{
    constructor(x,y,height,angle){
        //options
        var options={
            restitution:0.8,
            friction:1.0,
            density:1.0,

        }
        //creating the objects
        this.body=Bodies.rectangle(x,y,20,height,options);
        Matter.Body.setAngle(this.body,angle)
        this.width=20;
        this.height=height;
        World.add(world,this.body)

    }
    display(){
        //the position and the angle of the body
        var pos=this.body.position;
        var angle=this.body.angle;
        //to add the rotation and the translation to the body
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("lightblue")
        fill("darkblue");
        rect(0,0,this.width,this.height);
        pop();
    }
    /*display1(){
        //the position and the angle of the body
        var pos=this.body.position;
        var angle=this.body.angle;
        //to add the rotation and the translation to the body
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }*/

}
