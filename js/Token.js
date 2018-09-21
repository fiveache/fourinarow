export default class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
    this.moveLeft = () => console.log('move left');
    this.moveRight = () => console.log('move right');
    this.drop = () => console.log('dropped token');
  }
}
