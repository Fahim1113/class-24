//class box
class Bird{
    constructor(x,y){
        //options
        var options={
            restitution:0.8,
            friction:0.3,
            density:1.0,

        }
        //creating the objects
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        World.add(world,this.body)

    }
    display(){
        //the position and the angle of the body
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.body.angle;
        //to add the rotation and the translation to the body
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("red")
        fill("orange");
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
