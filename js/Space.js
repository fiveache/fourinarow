export default class Space {
  constructor(taken, color) {
    this.isTaken = false;
    this.color = 'black';
    this.takeSpace = () => console.log('take this space');
  }
}
