import { Direction } from "./types";
class Snake {
  length: number;
  coors: Array<string>;
  direction: Direction;
  constructor() {
    this.length = 4;
    this.coors = ["2,4", "2,5", "3,5", "3,6"];
    this.direction = Direction.Top;
  }

  getMoveCoors(container) {
    console.log(container);
    let coors = this.coors;
    coors = coors.map(item => {
      return item;
    });
    // top
    let first = coors[0];
    first = `${first.split(",")[0]},${Number(first.split(",")[1]) - 1}`;
    coors.unshift(first);
    coors.pop();
    // down
    // coors.shift();
    // let last = coors[coors.length - 1];
    // last = `${last.split(",")[0]},${Number(last.split(",")[1]) + 1}`
    // coors.push(last);
    this.coors = coors;
    return coors;
  }

  changeDirection(dir: Direction) {
    this.direction = dir;
  }
}

export default Snake;
