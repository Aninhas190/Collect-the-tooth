class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.height = this.$canvas.height;
    this.width = this.$canvas.width;

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

  startGame() {
    this.background = new Background(this);
    this.obstacles = [];
    this.randomizeObstacles();
    this.player = new Character(this);
    this.loop();
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  randomizeObstacles() {
    const width = this.width;
    const height = this.height;
    this.obstacles.push(
      new Obstacle(this, {
        x: 0, y: 550, width: 1000, height: 600
      })
    );  
  }

  runLogic() {
    this.player.runLogic();
  }

  drawGame() {
    this.background.drawBackground();
    for (let obstacle of this.obstacles) obstacle.drawObstacle();
    this.player.drawCharacter();
  }

  loop() {
    //console.log('loop is runing');
    this.runLogic();
    this.clearCanvas();
    this.drawGame();
    window.requestAnimationFrame((timestamp) => this.loop(timestamp));
  }
}
