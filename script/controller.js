class Controller {
  constructor(game) {
    this.game = game;

    document.addEventListener('keydown', (event) => {
      const player = game.currentLevel.player;
      const keyCode = event.keyCode;
      event.preventDefault();
      switch (keyCode) {
        case 32:
          player.jump();
          player.jumping = true;
          break;
        case 37:
          player.moveLeft();
          break;
        case 39:
          player.moveRight();
          break;
      }
    });
    
    document.addEventListener('keyup', (event) => {
      const player = game.currentLevel.player;
      const keyCode = event.keyCode;
      event.preventDefault();
      switch (keyCode) {
        case 32:
          player.jumping = false;
          break;
      }
    });
  }
}
