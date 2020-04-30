class Level3 extends GenericLevel {
  setup() {
    this.lake = new Lake(this.game);
    this.end = new FinishPoint(this.game);     
  }

  
}