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
    this.platforms = [];
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
    this.platforms.push(new Platform(this, { x: 0, y: 550, width: 1000, height: 600 }));
    this.platforms.push(new Platform(this, { x: 300, y: 350, width: 100, height: 50}));
  }

  runLogic() {
    this.player.runLogic();
  }

  drawGame() {
    this.background.drawBackground();
    for (let platform of this.platforms) platform.drawPlatforms();
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
