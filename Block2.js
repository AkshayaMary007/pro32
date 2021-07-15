class Block2{
  constructor(x, y, width, height) {
    var options = {
      'restitution' :0.4,
      'friction' :1.0
  }
      this.visibility =255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.remove = true;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<4.5){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke("black");
        fill("skyblue");
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      } else{
        World.remove(world,this.body);
        if(this.remove === true){
        score = score+50;
        this.remove = false;
        }
        push();
        this.visibility = this.visibility-5;
        pop();
      }
    }
}


