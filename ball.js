class Bob {
    constructor(x,y,r) {
        var options = {
            isStatic:false,
            restitution:1,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(x,y,r,options);
        this.radius = 2*r;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(255);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}