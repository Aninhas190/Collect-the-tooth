class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.height = this.$canvas.height;
    this.width = this.$canvas.width;
    this.levelWon = false;
    this.characterDie = false;

    this.setKeyBindings();
  }

  gameOver() {
    this.characterDie = true;
  }

  setKeyBindings() {
    window.addEventListener('keydown', (event) => {
      const keyCode = event.keyCode;
      event.preventDefault();
      switch (keyCode) {
        case 32:
          this.player.jump();
          break;
        case 37:
          this.player.moveLeft();
          break;
        case 39:
          this.player.moveRight();
          break;
      }
    });
  }


  startGame() {
    this.background = new Background(this);
    this.platforms = [];
    this.randomizePlatforms();
    this.lake = new Lake(this);
    this.end = new FinishPoint(this);
    this.player = new Character(this);
    this.loop();
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  randomizePlatforms() {
    //floor left and righ
    this.platforms.push(new Platform(this, { x: 0, y: 550, width: 310, height: 600 }));
    this.platforms.push(new Platform(this, { x: 750, y: 550, width: 1000, height: 600 }));
    //platforms
    this.platforms.push(new Platform(this, { x: 350, y: 400, width: 100, height: 50 }));
    this.platforms.push(new Platform(this, { x: 600, y: 400, width: 100, height: 50 }));
  }

  runLogic() {
    this.player.runLogic();
    if (this.player.position.x + this.player.dimensions.x >= this.end.position.x) {
      //the character won
      this.levelWon = true;
    }
  }

  drawGame() {
    this.background.drawBackground();
    for (let platform of this.platforms) platform.drawPlatforms();
    this.lake.drawLake();
    this.end.drawEnd();
    this.player.drawCharacter();
  }

  loop() {
    //console.log('loop is runing');
    this.runLogic();
    this.clearCanvas();
    !this.levelWon ? this.drawGame() : this.background.drawWin();
    !this.characterDie ? this.drawGame() : this.background.drawGameOver();~
    console.log(this.characterDie);
    if (!this.levelWon || !this.characterDie) {
      window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }
  }
}
