const characterImage = new Image();
characterImage.src = '/image/characterStanding.png';

class Character {
  constructor(level) {
    this.level = level;
    this.game = level.game;
    this.position = {
      x: 0,
      y: 0
    };
    this.dimensions = {
      x: 45,
      y: 45
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.gravity = 10;
    this.friction = 5;
    this.width = this.game.width;
    this.jumping = false;
  }

  jump() {
    if (this.velocity.y === 0 && !this.jumping) {
      this.jumping = true;
      this.velocity.y -= 8;
    }  
  }

  moveLeft() {
    this.velocity.x -= 2;
  }

  moveRight() {
    this.velocity.x += 2;
  }

  runLogic() {
    const { position, dimensions, velocity, gravity, friction } = this;

    let newVelocity = {
      x: velocity.x / (1 + (friction / 1000) * 20),
      y: velocity.y + (gravity / 1000) * 20
    };
    let newPosition = {
      x: position.x + newVelocity.x,
      y: position.y + newVelocity.y
    };

    //check colision with game platforms
    for (let platform of this.level.platforms) {
      const horizontalIntersection = platform.checkIntersection({
        position: {
          ...position,
          x: newPosition.x
        },
        dimensions
      });
      const verticalIntersection = platform.checkIntersection({
        position: {
          ...position,
          y: newPosition.y
        },
        dimensions
      });
      if (verticalIntersection) {
        newVelocity.y = 0;
        newPosition.y = position.y;
      }
      if (horizontalIntersection) {
        newVelocity.x = 0;
        newPosition.x = position.x;
      }
    }
    //check colision with car
    for (let car of this.level.cars) {
      const horizontalWaterIntersection = car.checkFall({
        position: {
          ...position,
          x: newPosition.x
        },
        dimensions
      });
      const verticalWaterIntersection = car.checkFall({
        position: {
          ...position,
          y: newPosition.y
        },
        dimensions
      });
      if (verticalWaterIntersection) {
        this.game.gameOver();
      }
      if (horizontalWaterIntersection) {
        this.game.gameOver();
      }
    }
    Object.assign(this.velocity, newVelocity);
    Object.assign(this.position, newPosition);
    
    const child = this.level.child;
    if ((this.position.y + this.dimensions.y > child.position.y) &&
    (this.position.x + this.dimensions.x > child.position.x) && 
    (this.position.y < child.position.y + child.dimensions.y) && 
    (this.position.x < child.position.x + child.dimensions.x)){
      this.level.characterDie = true;
    }


    //create limits for the charater
    if (this.position.x <= 0) this.position.x = 0;
    if (this.position.y <= 0) this.position.y = 0;
    console.log(this.width)
    if (this.position.x + this.dimensions.x >= this.width) {
      this.position.x = this.width - this.dimensions.x;
    }
    

  }

  //draw character
  drawCharacter() {
    const context = this.game.context;
    let {
      position: { x, y },
      dimensions: { x: playerWidth, y: playerHeight }
    } = this;
    context.save();
    context.drawImage(characterImage, x, y, playerWidth, playerHeight);
    context.restore();
  }
}
