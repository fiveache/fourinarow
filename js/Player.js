export default class Player {
  constructor(score, id, color, isTurn = false) {
    this.score = score;
    this.id = id;
    this.color = color;
    this.isTurn = isTurn;
    this.tokens = createTokens(21);
    this.createTokens = (num) => Array.apply(null, Array(num)).map((e, i) => i);
    this.play = () => this.isTurn
      ? !this.isTurn
      : this.isTurn;
  }

}
