class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.height = this.$canvas.height;
    this.width = this.$canvas.width;
    this.levels = [new Level1(this), new Level2(this)];
    this.currentLevel = this.levels[0];

    this.controller = new Controller(this);

    this.reset();
  }

  /*
  checkLevel() {
    if (this.level === this.level.levelWon) {
      //this.currentLevel = this.level1;
      this.reset();
      this.level1.startGame();
      console.log('this run');
    }
  }
  */

  drawStartingPoint() {
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, this.width, this.height);
    this.context.fillStyle = 'white';
    this.context.font = '30px sans-serif';
    this.context.fillText('Press enter to start game', 230, this.height / 2);
  }

  startGame() {
    this.currentLevel.startGame();
  }

  gameOver() {
    this.currentLevel.gameOver();
  }

  reset() {
    this.currentLevel.reset();
    this.currentLevel.startGame();
  }
}
