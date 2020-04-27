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
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    context.fillStyle = 'black';
    context.font = "80px Georgia";
    context.fillText('Level 1', 330, 250);
    context.fillText('Completed', 270, 350)
  }

  firstLayer() {
    const context = this.game.context;
    const height = 600;
    const width = 1000;
    context.fillStyle = '#66cdaa';
    context.fillRect(0, 0, width, height);
  }
}
