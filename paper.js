class Paper extends Baseclass {
    constructor(x,y,radius){
        super (x,y,70)
        this.image = loadImage(paper.png)

    }

    display (){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        ellipse(0,0,radius);
        pop();

    }
}