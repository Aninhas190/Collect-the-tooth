class Controller {
  constructor(game, player) {
    this.game = game;
    this.player = player;
    document.addEventListener('keydown', (event) => {
      const keyCode = event.keyCode;
      event.preventDefault();
      switch (keyCode) {
        case 32:
          this.player.jump();
          break;
        case 37:
          this.player.moveLeft();
          break;
        case 39:
          this.player.moveRight();
          break;
      }
    });

    document.addEventListener('keyup', (event) => {
      const keyCode = event.keyCode;
      event.preventDefault();
      switch (keyCode) {
        case 37:
          this.player.stop();
          break;
        case 39:
          this.player.stop();
          break;
      }
    });
  }
}
