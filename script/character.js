const characterImage = new Image();
characterImage.src = '/image/characterStanding.png';

class Character {
  constructor(game) {
    this.game = game;
    this.position = {
      x: 100,
      y: 370
    };
    this.dimensions = {
      x: 290/2,
      y: 200/2
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.gravity = 10;
    this.friction = 15;
  }

  jump() {
    this.velocity.y -= 5;
  }

  moveLeft() {
    this.velocity.x -= 1 * 2;
  }

  moveRight() {
    this.velocity.x += 1 * 2;
  }

  runLogic() {
    const { position, dimensions, velocity, gravity, friction } = this;

    let newVelocity = {
      x: velocity.x / (1 + (friction / 1000) * 16),
      y: velocity.y + (gravity / 1000) * 16
    };
    let newPosition = {
      x: position.x + newVelocity.x,
      y: position.y + newVelocity.y
    };

    for (let obstacle of this.game.obstacles) {
      const horizontalIntersection = obstacle.checkIntersection({
        position: {
          ...position,
          x: newPosition.x
        },
        dimensions
      });
      //console.log('hor', horizontalIntersection);

      const verticalIntersection = obstacle.checkIntersection({
        position: {
          ...position,
          y: newPosition.y
        },
        dimensions
      });

      //console.log('ver', verticalIntersection);

      if (verticalIntersection) {
        newVelocity.y = 0;
        newPosition.y = position.y;
      }
      if (horizontalIntersection) {
        newVelocity.x = 0;
        newPosition.x = position.x;
      }

      if (position.y > 540) {
        newPosition.y = 540;
      }
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
