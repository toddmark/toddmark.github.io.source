import { Direction } from "./types";
import { fail } from "assert";
class Snake {
  length: number;
  coors: Array<string>;
  direction: Direction;
  container: any;
  constructor(props) {
    this.length = 4;
    this.coors = ["2,4", "2,5", "3,5", "3,6"];
    this.direction = Direction.Top;
    this.registerEvent();
    this.container = props.container;
  }

  getMoveCoors() {
    this.coors = this.detectBoudary();
    return this.coors;
  }

  detectBoudary() {
    let head = this.coors[0];
    const { mapSize } = this.container;
    const x: number = Number(head.split(",")[0]);
    const y: number = Number(head.split(",")[1]);
    let nextX = x;
    let nextY = y;
    switch (this.direction) {
      case Direction.Top:
        nextY = y - 1;
        break;
      case Direction.Down:
        nextY = y + 1;
        break;
      case Direction.Left:
        nextX = x - 1;
        break;
      case Direction.Right:
        nextX = x + 1;
        break;
    }
    head = `${nextX},${nextY}`;
    //  boudary
    let isAlive = false;
    let failedReason = "";
    console.log(this.coors, head);
    if (
      nextX < mapSize.col &&
      nextX >= 0 &&
      nextY < mapSize.row &&
      nextY >= 0
    ) {
      isAlive = true;
      if (this.coors.includes(head)) {
        isAlive = false;
        failedReason = "kill self";
      }
    } else {
      isAlive = false;
      failedReason = "over boudary";
    }
    if (isAlive) {
      return this.moveSnake(head);
    } else {
      console.log("touch down", failedReason);
    }
    return this.coors;
  }

  moveSnake(head) {
    this.coors.unshift(head);
    this.container.clearCanvas([this.coors.pop()]);
    return this.coors;
  }

  changeDirection(dir: Direction) {
    let effectiveChange = true;
    if (this.direction === Direction.Top && dir === Direction.Down) {
      effectiveChange = false;
    }
    if (this.direction === Direction.Down && dir === Direction.Top) {
      effectiveChange = false;
    }
    if (this.direction === Direction.Left && dir === Direction.Right) {
      effectiveChange = false;
    }
    if (this.direction === Direction.Right && dir === Direction.Left) {
      effectiveChange = false;
    }
    if (effectiveChange) {
      this.direction = dir;
    }
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
