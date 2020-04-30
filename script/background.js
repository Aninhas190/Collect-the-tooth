const roomBackground = new Image();
roomBackground.src = '/image/stars.jpg'
class Background {
  constructor(game) {
    this.game = game;
  }

  drawGameOver() {
    const context = this.game.context;
    const height = this.game.height;
    const width = this.game.width;
    context.fillStyle = '#01182A';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'white';
    context.font = "80px sans-serif";
    context.fillText('Game Over!', 200, 250);
    context.font = '40px sans-serif'
    context.fillText('Press Backspace/Delete to Reset level!', 50, 300);
  }

  drawWin() {
    const context = this.game.context;
    const height = 600;
    const width = 1000;
    context.fillStyle = '#01182A';
    context.fillRect(0, 0, width, height);
    
    context.fillStyle = 'white';
    context.font = "80px sans-serif";
    context.fillText('You Won', 150, 200);
    
    context.font = "30px sans-serif";
    context.fillText('Your mission is finished', 50, 300);
    
    context.fillText('You were able to collect the tree tooths', 180, 350)

    context.font= '15px sans-serif'
    context.fillText('Thank you for your service', 550, 400);
  }

  drawBackground() {
    const context = this.game.context;
    const height = 500;
    const width = 800;

    context.save();


    context.fillStyle = '#01182A';
    context.fillRect(0, 0, width, height);

    context.drawImage(roomBackground, 0, 0, width, height);

    context.restore()
  }
}
