class FinishPoint {
  constructor(game) {
    this.game = game
    this.position = { x: 750, y: 350};
    this.dimension = { x: 800, y: 450};
  }


  drawEnd() {
    const context = this.game.context;
    let {
      position: { x, y},
      dimension: {x: width, y: height}
    } = this;
    context.save();

    context.fillStyle = 'black';
    context.fillRect(x, y, width, height);

    context.restore();
  }
}