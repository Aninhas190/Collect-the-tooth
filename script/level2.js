class Level2 extends GenericLevel {
  setup() {
    this.lake = new Lake(this.game);
    this.end = new FinishPoint(this.game);

    this.player.position.x = 0;
    this.player.position.y = 0;

    //floor left and righ
    this.platforms.push(new Platform(this.game, { x: 0, y: 450, width: 200, height: 500 }));
    this.platforms.push(new Platform(this.game, { x: 650, y: 450, width: 800, height: 500 }));
    //platforms
    this.platforms.push(new Platform(this.game, { x: 150, y: 220, width: 100, height: 50 }));
    this.platforms.push(new Platform(this.game, { x: 600, y: 420, width: 100, height: 50 }));
  }
}
