const checkFall = (first, second) => {
  const intersectionDirections = [];
  const intersectionAxis = [];
  return (
    first.bottom > second.top &&
    first.top < second.bottom &&
    first.right > second.left &&
    first.left < second.right
  );
}

const getCoordinatesFall = object => ({
  top: object.position.y,
  right: object.position.x + object.dimensions.x,
  bottom: object.position.y + object.dimensions.y,
  left: object.position.x,
  ...object
});

class Lake {
  constructor(game) {
    this.game = game;
    this.position = { x: 300, y: 550};
    this.dimensions = { x: 450, y: 600};
  }

  drawLake () {
    const context = this.game.context;
    let {
      position: { x, y},
      dimensions: {x: width, y: height}
    } = this;
    context.save();

    context.fillStyle = '#00BFFF';
    context.fillRect(x, y, width, height);

    context.restore();
  }

}