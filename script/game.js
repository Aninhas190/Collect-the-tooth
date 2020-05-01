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
    this.score = new Score(this);
    this.gameStarted = false;
  }

  drawStartingPoint() {
    this.context.save();
    this.context.fillStyle = '#01182A';
    this.context.fillRect(0, 0, this.width, this.height);
    this.context.fillStyle = 'white';

    this.context.font = '30px Roboto';
    this.context.fillText('Mission Rules:', 300, 60);

    this.context.font = '25px Roboto';
    this.context.fillText('1. If you see a      , please do not wake him up', 150, 200);

    this.context.fillText(`2. Do not fall on the child's`, 150, 250);

    this.context.fillText('3. Collect the', 150, 300);

    this.context.font = '30px Roboto';
    this.context.fillText('Press enter to start game', 230, 430);
    
    window.addEventListener('load', event => {
      this.context.drawImage(childImage, 310, 175, 30, 30);
      this.context.drawImage(car, 450, 225, 35, 30);
      this.context.drawImage(toothImage, 305, 278, 25, 25);
    })
    
    this.context.restore();
  }

  startGame() {
    this.gameStarted = true;
    gameSound.play();
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
