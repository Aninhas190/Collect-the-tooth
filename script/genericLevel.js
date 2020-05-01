const endSound = new Audio('/audio/Well Done CCBY3.ogg')

class GenericLevel {
  constructor(game) {
    this.game = game;
    this.context = this.game.context;
    this.height = this.game.height;
    this.width = this.game.width;
    
    this.reset();
  }

  startGame() {
    this.gameStarted = true;
    this.loop();
  }
  
  reset() {
    this.levelWon = false;
    this.characterDie = false;
    this.background = new Background(this.game);
    this.player = new Character(this);
    this.child = new Child(this.game);
    this.platforms = [];
    this.cars = [];

    this.setup();
  }

  gameOver() {
    this.characterDie = true;
    this.background.drawGameOver();
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  drawGame() {
    this.background.drawBackground();
    for (let car of this.cars) car.drawCar();
    for (let platform of this.platforms) platform.drawPlatforms();
    this.end.drawEnd();
    this.player.drawCharacter();
    this.child.drawChild();
    this.game.score.drawScore();
  }

  runLogic() {
    this.player.runLogic();
    const end = this.end;
    const player = this.player;
    if ((player.position.y + player.dimensions.y > end.position.y) &&
      (player.position.x + player.dimensions.x > end.position.x) && 
      (player.position.y < end.position.y + end.dimension.y) && 
      (player.position.x < end.position.x + end.dimension.x)){
      //the character won
      this.levelWon = true;
      this.game.score.trueScore++;
    }
    
  }
  
  loop() {
    this.runLogic();
    this.clearCanvas();
    this.drawGame();
    if (this.levelWon) {
      const indexOfCurrentLevel = this.game.levels.findIndex((level) => level === this);
      const nextLevel = this.game.levels[indexOfCurrentLevel + 1];
      if (nextLevel) {
        this.game.currentLevel = nextLevel;
        this.game.currentLevel.startGame();
      } else {
        gameSound.pause();
        this.background.drawWin();
        endSound.play();
      }
    } else if (this.characterDie) {
      gameSound.pause();
      gameOverSound.play();
      this.gameOver();
    } else {
      window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }
  }
}
