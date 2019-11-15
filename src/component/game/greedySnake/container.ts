import { GridType, ICoorMap } from "./types";
import Snake from "./snake";

class Game {
  canvas: HTMLCanvasElement;
  map: Array<Array<number>>;
  emptyGrid: Array<string>;
  filledGrid: Array<string>;
  ctx: any;
  timerFrame: any;
  timerInterval: any;
  speed: number;
  snake: Snake;
  private mapSize = {
    row: 10,
    col: 10,
    width: 300,
    height: 300
  };
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.map = [];
    this.timerFrame = null;
    this.timerInterval = null;
    this.speed = 1000 / 2;
  }

  start() {
    const { width, height } = this.mapSize;
    this.canvas.width = width;
    this.canvas.height = height;
  }

  init() {
    const { width, height, row, col } = this.mapSize;
    this.snake = new Snake();
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx.fillStyle = "rgb(0,0,0,.3)";
    this.emptyGrid = [];
    this.filledGrid = [];
    const temp = [];
    const tempCoor = [];
    for (let i = 0; i < col; i++) {
      temp[i] = [];
      for (let j = 0; j < row; j++) {
        temp[i].push(0);
        tempCoor.push(`${i},${j}`);
      }
    }
    const initSnkae = this.toObjectCoors(this.snake.coors);
    this.updateCanvas(initSnkae);
    this.map = temp;
    this.emptyGrid = tempCoor;
    this.continueGame();
  }

  pauseGame() {
    window.cancelAnimationFrame(this.timerFrame);
    this.timerFrame = null;
    clearInterval(this.timerInterval);
    this.timerInterval = null;
  }

  continueGame() {
    if (!this.timerFrame) {
      const fn = () => {
        this.updateMap();
        this.timerFrame = window.requestAnimationFrame(fn);
      };
      this.timerFrame = window.requestAnimationFrame(fn);
    }
  }

  toObjectCoors(strCoors: Array<string>): Array<ICoorMap> {
    return strCoors.map(item => ({
      x: Number(item.split(",")[0]),
      y: Number(item.split(",")[1]),
      type: GridType[item.split(",")[2]]
    }));
  }

  toStringCoors(arrCoors: Array<ICoorMap>): Array<string> {
    return arrCoors.map(item => `${item.x},${item.y},${item.type}`);
  }

  getRandomCoor(): Array<ICoorMap> {
    const random = Math.floor(Math.random() * this.emptyGrid.length);
    const randomItem = this.emptyGrid[random];
    const [x, y] = randomItem.split(",").map(item => Number(item));
    this.emptyGrid.splice(random, 1);
    return [{ x, y, type: GridType.Bean }];
  }

  getSnakeCoor(): Array<ICoorMap> {
    let coors = this.toObjectCoors(this.snake.getMoveCoors(this));
    coors = coors.map(item => ({ ...item, type: GridType.Snake }));
    return coors;
  }

  getUpdateCoor(): Array<ICoorMap> {
    const strSnakeCoor: Array<string> = this.toStringCoors(this.getSnakeCoor());
    const newCoors: Array<string> = [];
    for (const item of strSnakeCoor) {
      if (!this.filledGrid.includes(item)) {
        newCoors.push(item);
        this.filledGrid.push(item);
        const index = this.emptyGrid.indexOf(item.substr(0, 3));
        this.emptyGrid.splice(index, 1);
      }
    }
    // const randomItem = this.getRandomCoor();
    // newCoors.push(...this.toStringCoors(randomItem));
    return this.toObjectCoors(newCoors);
  }

  updateMap() {
    // console.log(this.map);
    // const { row, col } = this.mapSize;
    if (!this.timerInterval) {
      this.timerInterval = setInterval(() => {
        if (this.isEmptyMap()) {
          const newMap = JSON.parse(JSON.stringify(this.map));
          const arrCoors = this.getUpdateCoor();
          for (const item of arrCoors) {
            newMap[item.x][item.y] = 1;
          }
          this.map = newMap;
          this.updateCanvas(arrCoors);
        } else {
          console.log("end");
          this.pauseGame();
        }
      }, this.speed);
    }
  }

  updateCanvas(updateSquare: Array<ICoorMap>) {
    // console.log(updateSquare);
    const { width, height, row, col } = this.mapSize;
    for (const item of updateSquare) {
      const { x, y } = item;
      this.ctx.fillStyle = "rgba(50,100,200,0.2)";
      this.ctx.fillRect(
        (x * width) / col,
        (y * width) / row,
        width / col,
        height / row
      );
      this.ctx.font = "12px Arial";
      this.ctx.fillStyle = "rgba(255,255,255,1)";
      this.ctx.fillText(
        `(${x},${y})`,
        (x * width) / col,
        (y * width) / row + 10
      );
    }
    // this.ctx.strokeRect(
    //   i * this.mapSize.width / this.mapSize.col,
    //   j * this.mapSize.height / this.mapSize.row,
    //   this.mapSize.width / this.mapSize.col, this.mapSize.height / this.mapSize.row);
  }

  clearCanvas(arrClear: Array<string>) {
    const { width, height, row, col } = this.mapSize;
    const arrFilled = this.filledGrid.map(item => item.substr(0, 3));
    for (const item of arrClear) {
      const x = Number(item.split(",")[0]);
      const y = Number(item.split(",")[1]);
      this.ctx.clearRect(
        (x * width) / col,
        (y * width) / row,
        width / col,
        height / row
      );
      const indexClear = arrFilled.indexOf(item);
      console.log(indexClear, item, this.filledGrid);
      if (indexClear > -1) {
        this.filledGrid.splice(indexClear, 1);
      }
    }
    this.emptyGrid.push(...arrClear);
  }

  isEmptyMap() {
    const { row, col } = this.mapSize;
    const current = this.map
      .reduce((arr, value) => {
        return arr.concat(value);
      }, [])
      .reduce((resSum, value) => (resSum += value));
    // console.log(current);
    return current !== row * col;
  }

  restart() {
    const { width, height } = this.mapSize;
    this.ctx.clearRect(0, 0, width, height);
    this.init();
  }
}

export default Game;
