class Level2 extends GenericLevel {
  setup() {
    this.end = new FinishPoint(this.game);

    this.player.position.x = 0;
    this.player.position.y = 0;


    this.end.position = { x: 550, y: 50 };
    this.lake.push(new Lake(this.game, { x: 50, y: 450, width: 800, height: 50 }));

    //floor left
    this.platforms.push(new Platform(this.game, { x: 0, y: 400, width: 50, height: 500 }));

    //platforms
    this.platforms.push(new Platform(this.game, { x: 200, y: 350, width: 100, height: 50 }));
    this.platforms.push(new Platform(this.game, { x: 300, y: 220, width: 100, height: 50 }));
    this.platforms.push(new Platform(this.game, { x: 450, y: 350, width: 100, height: 50 }));
    this.platforms.push(new Platform(this.game, { x: 650, y: 220, width: 100, height: 50 }));
    this.platforms.push(new Platform(this.game, { x: 550, y: 100, width: 100, height: 50 }));
  }
}
