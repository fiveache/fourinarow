import Token from './Token';
export default class Player {
  constructor(score, id, color, isTurn = false) {
    this.score = score;
    this.id = id;
    this.color = color;
    this.isTurn = isTurn;
    this.tokens = this.createTokens(21);
    this.play = () => this.isTurn
      ? !this.isTurn
      : this.isTurn;
  }

  /**
  * Creates token objects for player
  * @param   {integer}   num - Number of token objects to be created
  * @return  {array}     tokens - an array of new token objects
  */
  
  createTokens(num) {
    const tokens = [];
    for (let i = 0; i < num; i++) {
      let token = new Token(i, this);
      tokens.push(token);
    }
    return tokens;
  }
}
