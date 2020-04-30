const gameSound = new Audio('/audio/Worldmap Theme_0.mp3');
const gameOverSound = new Audio('/audio/pixie-go.mp3');
class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.height = this.$canvas.height;
    this.width = this.$canvas.width;
    this.levels = [new Level1(this), new Level2(this), new Level3(this)];
    this.currentLevel = this.levels[0];

    this.controller = new Controller(this);

    this.gameStarted = false;
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
    this.gameStarted = true;
    gameSound.play()
    this.currentLevel.startGame();
  }

  gameOver() { 
    gameSound.pause();
    gameOverSound.play();
    this.currentLevel.gameOver();
  }

  reset() {
    gameOverSound.pause();
    gameSound.play();
    this.currentLevel.reset();
    this.currentLevel.startGame();
  }
}
