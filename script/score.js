class Score {
  constructor(game) {
    this.game = game;
    this.trueScore = 0;
  }


  drawScore () {
    const context = this.game.context;
    //const score = this.game.score;

    context.fillStyle = 'white'; 
    context.font = '24px Roboto';

    context.fillText(`${this.trueScore} Tooth`, 10, 30);
  }
  
}