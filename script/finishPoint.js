const toothImage = new Image();
toothImage.src = '/image/tooth.png'

class FinishPoint {
  constructor(game) {
    this.game = game
    this.position = { x: 750, y: 400};
    this.dimension = { x: 50, y: 50};
  }


  drawEnd() {
    const context = this.game.context;
    let {
      position: { x, y},
      dimension: {x: width, y: height}
    } = this;

    context.save();
    context.drawImage(toothImage, x, y, width, height);
    
    /*context.fillStyle = 'black';
    context.fillRect(x, y, width, height);
    */
    context.restore();
  }
}