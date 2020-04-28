const characterImage = new Image();
characterImage.src = '/image/characterStanding.png';

class Character {
  constructor(game) {
    this.game = game;
    this.position = {
      x: 0,
      y: 370
    };
    this.dimensions = {
      x: 90,
      y: 60
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.gravity = 15;
    this.friction = 10;
  }

  jump() { 
    if (this.position.y > 250) {
      this.velocity.y -= 10;
    }
  }

  moveLeft() {
    if(this.position.x >= 10) {
      this.velocity.x -= 1.5;
    }  
  }

  moveRight() {
    if (this.position.x <= 890) {
      this.velocity.x += 1.5;
    }
  }

  stop() {
    this.velocity = {x: 0, y: 0};
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

    for (let platform of this.game.platforms ) {
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
    const lake = this.game.lake;
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
    Object.assign(this.velocity, newVelocity);
    Object.assign(this.position, newPosition);
    
  }

  drawCharacter() {
    const context = this.game.context;
    const {
      position: { x, y },
      dimensions: { x: playerWidth, y: playerHeight }
    } = this;
    context.save();
    context.beginPath();
    context.rect(x, y, playerWidth, playerHeight);
    context.stroke();
    context.drawImage(characterImage, x, y, playerWidth, playerHeight);
    //window.addEventListener('load', (event) => {
    //context.drawImage(characterImage, x, y, playerWidth, playerHeight);
    //});
    context.restore();
  }
}
