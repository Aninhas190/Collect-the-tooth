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
      x: 50,
      y: 50
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.gravity = 10;
    this.friction = 5;
    this.width = this.game.width;
  }

  jump() {
    if (this.velocity.y >= 0) {
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
    //check colision with lake
    for (let lake of this.level.lake) {
      const horizontalWaterIntersection = lake.checkFall({
        position: {
          ...position,
          x: newPosition.x
        },
        dimensions
      });
      const verticalWaterIntersection = lake.checkFall({
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
    //create limits for the charater
    if (this.position.x <= 0) this.position.x = 0;
    if (this.position.y <= 0) this.position.y = 0;
    if (this.position.x + this.dimensions.x >= this.width) {
      this.position.x = this.dimensions.x - this.width;
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
