class Level {
  constructor (game) {
    this.game = game;
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


  randomizePlatforms() {
    //floor left and righ
    this.platforms.push(new Platform(this, { x: 0, y: 450, width: 200, height: 500 }));
    this.platforms.push(new Platform(this, { x: 650, y: 450, width: 800, height: 500 }));
    //platforms
    this.platforms.push(new Platform(this, { x: 250, y: 320, width: 100, height: 50 }));
    this.platforms.push(new Platform(this, { x: 500, y: 320, width: 100, height: 50 }));
  }

  drawGame() {
    this.background.drawBackground();
    for (let platform of this.platforms) platform.drawPlatforms();
    this.lake.drawLake();
    this.end.drawEnd();
    this.player.drawCharacter();
  }

}