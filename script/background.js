class Background {
  constructor(game) {
    this.game = game;
  }

  drawBackground() {
    this.firstLayer();
  }

  drawGameOver() {
    const context = this.game.context;
    const height = this.game.height;
    const width = this.game.width;
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';
    context.font = "80px Georgia";
    context.fillText('Game Over!', 200, 250);
  }

  drawWin() {
    const context = this.game.context;
    const height = 600;
    const width = 1000;
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    context.fillStyle = 'black';
    context.font = "80px Georgia";
    context.fillText('Level 1', 300, 200);
    context.fillText('Completed', 250, 260)
  }

  firstLayer() {
    const context = this.game.context;
    const height = 600;
    const width = 1000;
    context.fillStyle = '#66cdaa';
    context.fillRect(0, 0, width, height);
  }
}
