const car = new Image();
car.src = '/image/car.png';

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

class Car {
  constructor(game, {x, y, width, height}) {
    this.game = game;
    this.position = { x, y };
    this.dimensions = { x: width, y: height };
  }

  checkFall(player) {
    const car = this;
    const playerBlock = getCoordinatesFall(player);
    const carBlock = getCoordinatesFall(car);
    const intersection = checkFall(playerBlock, carBlock);
    return intersection;
  }

  drawCar() {
    const context = this.game.context;
    let {
      position: { x, y },
      dimensions: { x: width, y: height }
    } = this;
    context.save();
    context.fillStyle = '#01182A';
    context.fillRect(0, 0, width, height);
    context.drawImage(car, x, y, width, height);

    context.restore();
  }
}
