class Rain {
     constructor(y) {
        var rand = randomNumber(10,790)
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = 60;
        this.height = 80;
        this.x = rand;
        World.add(world, this.body);
}
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}