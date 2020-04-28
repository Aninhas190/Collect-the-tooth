class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.height = this.$canvas.height;
    this.width = this.$canvas.width;
    this.levelWon = false;
    this.characterDie = false;
  }
  
  drawStartingPoint() {
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, this.width, this.height);
    this.context.fillStyle = 'white';
    this.context.font = '30px sans-serif';
    this.context.fillText('Press enter to start game', 230, this.height / 2);
  }

  gameOver() {
    this.characterDie = true;
    this.background.drawGameOver();
  }

  startGame() {
    this.background = new Background(this);
    this.player = new Character(this);
    this.lake = new Lake(this);
    this.end = new FinishPoint(this);
    this.controller = new Controller(this,this.player);
    this.platforms = [];
    this.randomizePlatforms();
    this.loop();
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  randomizePlatforms() {
    //floor left and righ
    this.platforms.push(new Platform(this, { x: 0, y: 450, width: 200, height: 500 }));
    this.platforms.push(new Platform(this, { x: 650, y: 450, width: 800, height: 500 }));
    //platforms
    this.platforms.push(new Platform(this, { x: 250, y: 320, width: 100, height: 50 }));
    this.platforms.push(new Platform(this, { x: 500, y: 320, width: 100, height: 50 }));
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
