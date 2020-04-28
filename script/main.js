const $canvas = document.querySelector('canvas');

const game = new Game($canvas);

const $buttonStart = document.getElementById('start');
const $buttonRestart = document.getElementById('restart');

$buttonStart.addEventListener('click', () => {
  game.startGame();
})

/*$buttonRestart.addEventListener('click', () => {
  game.restart();
})*/
