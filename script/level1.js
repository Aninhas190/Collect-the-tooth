class Level1 extends GenericLevel {
  setup() {
    this.end = new FinishPoint(this.game);

    /*
    this.player.position.x = 650;
    this.player.position.y = 370;
    */

    this.player.position = {x: 0, y: 400};

    this.child.position = {x: 0, y: 250}


    for (let i = 200; i <= 600; i += 50) {
      this.cars.push(new Car(this.game, { x: i, y: 450, width: 50, height: 50 }));
    } 
    //floor left and right
    for (let i = 0; i <= 150; i += 50){
      this.platforms.push(new Platform(this.game, { x: i, y: 450, width: 50, height: 50 }));
    }

    for (let i = 650; i <= 800; i += 50){
      this.platforms.push(new Platform(this.game, { x: i, y: 450, width: 50, height: 50 }));
    }
    //platforms
    this.platforms.push(new Platform(this.game, {x: 0, y:300, width: 50, height: 50}))

    for (let i = 250; i < 350; i += 50){
      this.platforms.push(new Platform(this.game, { x: i, y: 320, width: 50, height: 50 }));
    }
    for (let i = 500; i < 600; i += 50){
      this.platforms.push(new Platform(this.game, { x: i, y: 320, width: 50, height: 50 }));
    }
    
  }
}
