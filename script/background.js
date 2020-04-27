class Background {
  constructor(game) {
    this.game = game;
  }

  drawBackground() {
    this.firstLayer();
  }

  firstLayer() {
    const context = this.game.context;
    const height = 600;
    const width = 1000;
    context.fillStyle = '#66cdaa';
    context.fillRect(0, 0, width, height);
  }
}
