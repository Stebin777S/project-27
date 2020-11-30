class Rope {
    constructor(body1,body2,offsetX) {

        this.offSetX = offsetX;

        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offSetX, y:0},
            stiffness:1, //higher stiffness = length will not change
            length:300 //length when no forces are being applied
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x+this.offSetX,pointB.y);
    }
}