class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.height = this.$canvas.height;
    this.width = this.$canvas.width;
    this.level = new Level(this);
    this.reset();
  }

  

  drawStartingPoint() {
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, this.width, this.height);
    this.context.fillStyle = 'white';
    this.context.font = '30px sans-serif';
    this.context.fillText('Press enter to start game', 230, this.height / 2);
  }

  startGame() {
    this.level.startGame();
  }

  gameOver(){
    this.level.gameOver();
  }

  reset() {
    this.level.reset();
  }
}
