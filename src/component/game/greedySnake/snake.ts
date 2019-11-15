import { Direction } from "./types";
class Snake {
  length: number;
  coors: Array<string>;
  direction: Direction;
  constructor() {
    this.length = 4;
    this.coors = ["2,4", "2,5", "3,5", "3,6"];
    this.direction = Direction.Top;
    this.registerEvent();
  }

  getMoveCoors(container) {
    let coors = this.coors;
    coors = coors.map(item => {
      return item;
    });
    // top
    let first = coors[0];
    const x = first.split(",")[0];
    const y = first.split(",")[1];
    switch (this.direction) {
      case Direction.Top:
        first = `${x},${Number(y) - 1}`;
        break;
      case Direction.Down:
        first = `${x},${Number(y) + 1}`;
        break;
      case Direction.Left:
        first = `${Number(x) - 1},${y}`;
        break;
      case Direction.Right:
        first = `${Number(x) + 1},${y}`;
        break;
    }
    coors.unshift(first);
    const clear = coors.pop();
    container.clearCanvas([clear]);
    this.coors = coors;
    // console.log(this.direction);
    return coors;
  }

  changeDirection(dir: Direction) {
    this.direction = dir;
  }

  onKeyPress(e) {
    switch (e.key) {
      case "w":
        this.changeDirection(Direction.Top);
        break;
      case "s":
        this.changeDirection(Direction.Down);
        break;
      case "a":
        this.changeDirection(Direction.Left);
        break;
      case "d":
        this.changeDirection(Direction.Right);
        break;
    }
  }

  registerEvent() {
    document.addEventListener("keypress", this.onKeyPress.bind(this));
  }
}

export default Snake;
