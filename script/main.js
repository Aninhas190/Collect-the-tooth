const $canvas = document.querySelector('canvas');


const game = new Game($canvas);



game.drawStartingPoint(); 

document.addEventListener('keydown', () => {
  switch(event.keyCode) {
    case 13:
      game.startGame();
      break;
    case 8:
      game.reset();
      break;  
  }
  
})


