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

  endOfGame() {
    if (this.player.position === this.end.position) {
    }
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
    this.platforms.push(new Platform(this, { x: 0, y: 550, width: 310, height: 600 }));
    this.platforms.push(new Platform(this, { x: 750, y: 550, width: 1000, height: 600 }));
    this.platforms.push(new Platform(this, { x: 300, y: 350, width: 100, height: 50 }));
    this.platforms.push(new Platform(this, { x: 650, y: 350, width: 100, height: 50 }));
  }

  runLogic() {
    this.player.runLogic();
    if (this.player.position.x + this.player.dimensions.x >= this.end.position.x) {
      //the character won
      this.levelWon = true;
      // console.log('you win!')
    }
    if (this.player.position.x > this.width && this.player.position.x < 0 && this.player.position.y > this.height && this.player.position.y < 0) {
      this.characterDie = true;
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
    !this.characterDie ? this.drawGame() : this.background.drawGameOver();
    if (!this.levelWon || !this.characterDie) {
      window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }
  }
}
