class Level {
  constructor (game) {
    this.game = game;
    this.context = this.game.context;
    this.height = this.game.height;
    this.width = this.game.width;
    this.levelWon = false;
    this.characterDie = false;
    this.reset();
  }
  
  startGame() {
    this.loop();
  }

  reset() {
    this.characterDie = false;
    this.background = new Background(this.game);
    this.player = new Character(this.game);
    this.player.velocity = {x: 0, y: 0};
    this.lake = new Lake(this.game);
    this.end = new FinishPoint(this.game);
    this.controller = new Controller(this.game, this.player);
    this.platforms = [];
    this.randomizePlatforms();
    this.drawGame();
  }

  gameOver() {
    this.characterDie = true;
    this.background.drawGameOver();
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  randomizePlatforms() {
    //floor left and righ
    this.platforms.push(new Platform(this.game, { x: 0, y: 450, width: 200, height: 500 }));
    this.platforms.push(new Platform(this.game, { x: 650, y: 450, width: 800, height: 500 }));
    //platforms
    this.platforms.push(new Platform(this.game, { x: 250, y: 320, width: 100, height: 50 }));
    this.platforms.push(new Platform(this.game, { x: 500, y: 320, width: 100, height: 50 }));
  }

  drawGame() {
    this.background.drawBackground();
    for (let platform of this.platforms) platform.drawPlatforms();
    this.lake.drawLake();
    this.end.drawEnd();
    this.player.drawCharacter();
  }

  runLogic() {
    this.player.runLogic();
    if (this.player.position.x + this.player.dimensions.x >= this.end.position.x) {
      //the character won
      this.levelWon = true;
    }
  }

  loop() {
    this.clearCanvas();
    this.runLogic();
    if (!this.levelWon && !this.characterDie) {
      this.drawGame();
    } else if (this.levelWon) {
      this.background.drawWin();
    } else {
      this.gameOver();
    }

    if (!this.levelWon || !this.characterDie) {
      window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }
  }

}