export default class Board {
  constructor() {
    this.rows = 6;
    this.columns = 7;
    this.spaces = [];
  }

  /**
 * Generates 2D array of spaces.
 * @return  {Array}     An array of space objects
 */
  createSpaces() {
    spaces = [];
    for (let c = 0; c < this.columns; c++) {
      const column = [];
      for (let r = 0; r < this.row; r++) {
        const space = new Space(x, y);
        column.push(space);
      }
      spaces.push(column);
    }
    return spaces;
  }

}
