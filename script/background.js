class Background {
  constructor(game) {
    this.game = game;
  }

  drawBackground() {
    this.firstLayer();
  }

  drawGameOver() {
    const context = this.game.context;
    const height = 600;
    const width = 1000;
    context.fillStyle = 'blue';
    context.fillRect(0, 0, width, height);
  }

  drawWin() {
    const context = this.game.context;
    const height = 600;
    const width = 1000;
    context.fillStyle = 'red';
    context.fillRect(0, 0, width, height);
  }

  firstLayer() {
    const context = this.game.context;
    const height = 600;
    const width = 1000;
    context.fillStyle = '#66cdaa';
    context.fillRect(0, 0, width, height);
  }
}
