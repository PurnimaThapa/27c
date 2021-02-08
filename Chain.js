class Chain {
    constructor(bodyA,bodyB){
    var options={
        bodyA:bird.body,
        bodyB:log.body,
        stiffness:0.05,
        length:10
    }
    this.body=Constraint.create(options)
    World.add(world,this.body)
}
    display(){
        
        var pointA=this.body.bodyA.position
        var pointB=this.body.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}