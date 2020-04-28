const $canvas = document.querySelector('canvas');

const game = new Game($canvas);



game.drawStartingPoint();

document.addEventListener('keydown', () => {
  if (event.keyCode === 13) {
    game.startGame();
  }
})

const $buttonStart = document.getElementById('start');
const $buttonRestart = document.getElementById('restart');
/*$buttonRestart.addEventListener('click', () => {
  game.restart();
})*/
