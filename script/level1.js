class Level1 extends Game{
  constructor(game) {
    
  }

  randomizePlatforms() {
    //floor left and righ
    this.platforms.push(new Platform(this, { x: 0, y: 450, width: 200, height: 500 }));
    this.platforms.push(new Platform(this, { x: 650, y: 450, width: 800, height: 500 }));
    //platforms
    this.platforms.push(new Platform(this, { x: 250, y: 320, width: 100, height: 50 }));
    this.platforms.push(new Platform(this, { x: 500, y: 320, width: 100, height: 50 }));
  }

  drawLevel1() {
    this.background.drawBackground();
    for (let platform of this.platforms) platform.drawPlatforms();
    this.lake.drawLake();
    this.end.drawEnd();
    this.player.drawCharacter();
  }
  
}