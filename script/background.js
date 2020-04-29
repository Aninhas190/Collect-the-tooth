class Background {
  constructor(game) {
    this.game = game;
  }
  
  drawStartingPoint() {
    console.log('this ran');
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, this.width, this.height);
    this.context.fillStyle = 'white';
    this.context.font = '30px sans-serif';
    this.context.fillText('Press enter to start game', 230, this.height / 2);
  }

  drawGameOver() {
    const context = this.game.context;
    const height = this.game.height;
    const width = this.game.width;
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';
    context.font = "80px sans-serif";
    context.fillText('Game Over!', 200, 250);
    context.font = '40px sans-serif'
    context.fillText('Press Backspace to Reset Game!', 100, 300);
  }

  drawWin() {
    const context = this.game.context;
    const height = 600;
    const width = 1000;
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    context.fillStyle = 'black';
    context.font = "80px sans-serif";
    context.fillText('Game Finished', 150, 200);
  }

  drawBackground() {
    const context = this.game.context;
    const height = 500;
    const width = 800;
    context.fillStyle = '#66cdaa';
    context.fillRect(0, 0, width, height);
  }
}
