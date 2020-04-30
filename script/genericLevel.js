

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
    this.platforms = [];
    this.lake = [];

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
    for (let lake of this.lake) lake.drawLake();
    for (let platform of this.platforms) platform.drawPlatforms();
    this.end.drawEnd();
    this.player.drawCharacter();
  }

  runLogic() {
    this.player.runLogic();
    const end = this.end;
    //console.log(end);
    if ((this.player.position.y + this.player.dimensions.y > end.position.y) &&
      (this.player.position.x + this.player.dimensions.x > end.position.x) && 
      (this.player.position.y < end.position.y + end.dimension.y) && 
      (this.player.position.x < end.position.x + end.dimension.x)){
      //the character won
      this.levelWon = true;
    }
  }

  loop() {
    this.runLogic();
    this.clearCanvas();
    this.drawGame();
    if (!this.game.gameStarted) {
      this.game.drawStartingPoint();
    }
    if (this.levelWon) {
      const indexOfCurrentLevel = this.game.levels.findIndex((level) => level === this);
      const nextLevel = this.game.levels[indexOfCurrentLevel + 1];
      if (nextLevel) {
        this.game.currentLevel = nextLevel;
        this.game.currentLevel.startGame();
      } else {
        this.background.drawWin();
      }
    } else if (this.characterDie) {
      this.gameOver();
    } else {
      window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }
  }
}
