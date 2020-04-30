class Level3 extends GenericLevel {
  setup() {
  this.end = new FinishPoint(this.game);     
  
  this.end.position = {x:0, y: 250};

  this.player.position = {x: 650, y: 0};

  this.child.position = {x:450, y:150};
  
  for (let i=700; i <= 800; i += 50) {
    this.cars.push(new Car(this.game, { x: i, y: 400, width: 50, height: 50 }));
    this.cars.push(new Car(this.game, { x: i, y: 450, width: 50, height: 50 }));
  }

  for (let i=0; i <=650; i+= 50) {
    this.cars.push(new Car(this.game, { x: i, y: 400, width: 50, height: 50 }));
    this.cars.push(new Car(this.game, { x: i, y: 450, width: 50, height: 50 }));
  }
  //starting platform
  this.platforms.push(new Platform(this.game, {x: 650, y: 350, width: 50, height: 50}));
  this.platforms.push(new Platform(this.game, {x: 650, y: 400, width: 50, height: 50}));
  this.platforms.push(new Platform(this.game, {x: 650, y: 450, width: 50, height: 50}));
  
  //platform
  //joking one
  this.platforms.push(new Platform(this.game, {x: 750, y: 50, width: 50, height: 50}));
  
  this.platforms.push(new Platform(this.game, {x: 600, y: 300, width: 50, height: 50}));

  this.platforms.push(new Platform(this.game, {x: 500, y: 200, width: 50, height: 50}));

  this.platforms.push(new Platform(this.game, {x: 450, y: 200, width: 50, height: 50}));
  
  this.platforms.push(new Platform(this.game, {x: 400, y: 100, width: 50, height: 50}));

  this.platforms.push(new Platform(this.game, {x: 300, y: 200, width: 50, height: 50}));
  this.platforms.push(new Platform(this.game, {x: 350, y: 200, width: 50, height: 50}));

  for (let i= 0; i <= 200; i += 50) {
    this.platforms.push(new Platform(this.game, {x: 300, y: i, width: 50, height: 50}));
  }
  this.platforms.push(new Platform(this.game, {x: 400, y: 300, width: 50, height: 50}));

  this.platforms.push(new Platform(this.game, {x: 300, y: 350, width: 50, height: 50}))

  this.platforms.push(new Platform(this.game, {x: 150, y: 300, width: 50, height: 50}))


  this.platforms.push(new Platform(this.game, {x: 0, y: 300, width: 50, height: 50}))

  }
}