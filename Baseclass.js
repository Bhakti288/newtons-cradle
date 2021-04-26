class Baseclass  {
    constructor(x,y,width,height,angle){
        var options = {
            'restitution' : 0.8,
        'friction' : 0.3,
        'density' : 1.2
        
    }
this.body = Bodies.rect(x,y,width,height,options)
this.width = width;
this.height=height;
this.image = loadImage(this.imagebase/Baseclass.png)
World.add(world,this.body);
    }

    display (){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,width,height);
        imageMode(CENTER);
        this.image(this.image,0,0,this.width,this.height);
        pop();

    }
}