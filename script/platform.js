const checkIntersection = (first, second) => {
  const intersectionDirections = [];
  const intersectionAxis = [];
  return (
    first.bottom > second.top &&
    first.top < second.bottom &&
    first.right > second.left &&
    first.left < second.right
  );
}

const getCoordinates = object => ({
  top: object.position.y,
  right: object.position.x + object.dimensions.x,
  bottom: object.position.y + object.dimensions.y,
  left: object.position.x,
  ...object
});

class Platform {
  constructor(game, {x, y, width, height}) {
    this.game = game;
    this.position = { x, y };
    this.dimensions = { x: width, y: height };
  }
  

  checkIntersection (player) {
    const platform = this;
    const playerBlock = getCoordinates(player);
    //console.log(playerBlock)
    const platformBlock = getCoordinates(platform);
    //console.log(obstacleBlock)
    const intersection = checkIntersection(playerBlock, platformBlock);
    //console.log(intersection)
    return intersection;
  }

  drawPlatforms() {
    const context = this.game.context;
    let {
      position: { x, y},
      dimensions: {x: width, y: height}
    } = this;
    context.save();

    context.fillStyle = '#006b3c';
    context.fillRect(x, y, width, height);

    context.restore();
  }


}