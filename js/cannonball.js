class Cannonball{
    constructor(x, y) {
      var options = {
        isStatic: true,
        restitution:0.8,
        friction:1.0,
        density:1.0
      };
      this.r=40;  
      this.body = Bodies.circle(x, y , this.r , options);
      this.image=loadImage("assets/cannonball.png")
      World.add(world, this.body);
    }

    shoot(){
     Matter.Body.setStatic(this.body,false)
      Matter.Body.setVelocity(this.body,{x:50,y:-30})
    }

    display() {
      var pos = this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.r,this.r);
      pop();
    }
  }
  