class Snow {
    constructor(x,y,r){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic : true
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = this.r;
        this.image = loadImage("snow4.webp")
        World.add(world, this.body);
   }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0, this.r, this.r);
        pop();
    }
} 