const childImage = new Image();
childImage.src = '/image/sleeping.png'
class Child {
  constructor (game) {
    this.game = game;
    this.position = {x: 0, y: 0};
    this.dimensions = {x: 50, y: 45};
  }

  drawChild() {
    const context = this.game.context;
    let {
      position: { x, y },
      dimensions: { x: childWidth, y: childHeight }
    } = this;

    context.save();
    context.drawImage(childImage, x, y, childWidth, childHeight);

    context.restore();
  }
}