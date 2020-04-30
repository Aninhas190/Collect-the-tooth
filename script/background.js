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
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';
    context.font = "80px sans-serif";
    context.fillText('Game Over!', 200, 250);
    context.font = '40px sans-serif'
    context.fillText('Press Backspace/Delete to Reset level!', 50, 300);
  }

  drawWin() {
    const context = this.game.context;
    const height = 600;
    const width = 1000;
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    context.fillStyle = 'black';
    context.font = "80px sans-serif";
    context.fillText('You Won', 150, 200);
    
    context.font = "30px sans-serif";
    context.fillText('Thanks to you the children are not traumatized', 50, 300);
    
    context.fillText('by their teeth anymore', 180, 350)

    context.font= '15px sans-serif'
    context.fillText('Plus they got some cash', 550, 400);
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
