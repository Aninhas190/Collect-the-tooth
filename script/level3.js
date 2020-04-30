class Level3 extends GenericLevel {
  setup() {
  this.end = new FinishPoint(this.game);     
  
  this.end.position = {x:0, y: 250};

  this.player.position = {x: 650, y: 0}
  
  
  this.lake.push(new Lake(this.game, { x: 700, y: 400, width: 100, height: 100 }));
  this.lake.push(new Lake(this.game, { x: 0, y: 400, width: 650, height: 100 }));
  
  //starting platform
  this.platforms.push(new Platform(this.game, {x: 650, y: 370, width: 50, height: 150}));
  
  //platform
  //joking one
  this.platforms.push(new Platform(this.game, {x: 750, y: 50, width: 50, height: 50}));
  
  this.platforms.push(new Platform(this.game, {x: 600, y: 300, width: 50, height: 50}));
  this.platforms.push(new Platform(this.game, {x: 500, y: 200, width: 50, height: 50}));
  //this.platforms.push(new Platform(this.game, {x: 450, y: 150, width: 50, height: 50}));
  this.platforms.push(new Platform(this.game, {x: 400, y: 100, width: 50, height: 50}));
  this.platforms.push(new Platform(this.game, {x: 300, y: 200, width: 100, height: 50}));
  this.platforms.push(new Platform(this.game, {x: 300, y: 0, width: 50, height: 200}));

  this.platforms.push(new Platform(this.game, {x: 400, y: 300, width: 50, height: 50}));

  this.platforms.push(new Platform(this.game, {x: 300, y: 350, width: 50, height: 50}))

  this.platforms.push(new Platform(this.game, {x: 150, y: 300, width: 50, height: 50}))


  this.platforms.push(new Platform(this.game, {x: 0, y: 300, width: 50, height: 50}))

  }
}