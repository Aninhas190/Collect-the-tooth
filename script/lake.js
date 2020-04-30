const checkFall = (first, second) => {
  const intersectionDirections = [];
  const intersectionAxis = [];
  return (
    first.bottom > second.top &&
    first.top < second.bottom &&
    first.right > second.left &&
    first.left < second.right
  );
};

const getCoordinatesFall = (object) => ({
  top: object.position.y,
  right: object.position.x + object.dimensions.x,
  bottom: object.position.y + object.dimensions.y,
  left: object.position.x,
  ...object
});

class Lake {
  constructor(game, {x, y, width, height}) {
    this.game = game;
    this.position = { x, y };
    this.dimensions = { x: width, y: height };
  }

  checkFall(player) {
    const lake = this;
    const playerBlock = getCoordinatesFall(player);
    const lakeBlock = getCoordinatesFall(lake);
    const intersection = checkFall(playerBlock, lakeBlock);
    return intersection;
  }

  drawLake() {
    const context = this.game.context;
    let {
      position: { x, y },
      dimensions: { x: width, y: height }
    } = this;
    context.save();

    context.fillStyle = '#00BFFF';
    context.fillRect(x, y, width, height);

    context.restore();
  }
}
