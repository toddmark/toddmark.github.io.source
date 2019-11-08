class Game {
  canvas: HTMLCanvasElement;
  map: Array<Array<number>>;
  mapCoordinate: Array<string>;
  ctx: any;
  timerFrame: any;
  timerInterval: any;
  speed: number;
  private mapSize = {
    row: 20,
    col: 20,
    width: 600,
    height: 600
  };
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.map = [];
    this.mapCoordinate = [];
    this.timerFrame = null;
    this.timerInterval = null;
    this.speed = 10;
  }

  start() {
    const { width, height } = this.mapSize;
    this.canvas.width = width;
    this.canvas.height = height;
  }

  init() {
    const { width, height, row, col } = this.mapSize;
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx.fillStyle = "rgb(0,0,0,.3)";
    const temp = [];
    const tempCoor = [];
    for (let i = 0; i < col; i++) {
      temp[i] = [];
      for (let j = 0; j < row; j++) {
        temp[i].push(0);
        tempCoor.push(`${i},${j}`);
      }
    }
    this.map = temp;
    this.mapCoordinate = tempCoor;
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

  getRandomCoor() {
    const random = Math.floor(Math.random() * this.mapCoordinate.length);
    const randomItem = this.mapCoordinate[random];
    const [x, y] = randomItem.split(",");
    const deleteItem = this.mapCoordinate.splice(random, 1);
    return { x, y };
  }

  updateMap() {
    // console.log(this.map);
    // const { row, col } = this.mapSize;
    if (!this.timerInterval) {
      this.timerInterval = setInterval(() => {
        const newMap = JSON.parse(JSON.stringify(this.map));
        if (this.isEmptyMap()) {
          const { x, y } = this.getRandomCoor();
          newMap[x][y] = 1;
          this.map = newMap;
          this.updateCanvas(Number(x), Number(y));
          // console.log(this.getRandomCoor());
        } else {
          console.log("end");
          this.pauseGame();
        }
      }, this.speed);
    }
  }

  updateCanvas(x: number, y: number) {
    // this.ctx.strokeStyle = "#fff";
    // console.count("1");
    // this.ctx.fillStyle = "rgba(0,0,0,0.7)";
    // this.ctx.fillRect(
    //   i * this.mapSize.width / this.mapSize.col,
    //   j * this.mapSize.height / this.mapSize.row,
    //   this.mapSize.width / this.mapSize.col, this.mapSize.height / this.mapSize.row);
    const { width, height, row, col } = this.mapSize;
    this.ctx.fillStyle = "rgba(50,100,200,0.2)";
    this.ctx.fillRect(
      (y * width) / col,
      (x * width) / row,
      width / col,
      height / row
    );
    // this.ctx.strokeRect(
    //   i * this.mapSize.width / this.mapSize.col,
    //   j * this.mapSize.height / this.mapSize.row,
    //   this.mapSize.width / this.mapSize.col, this.mapSize.height / this.mapSize.row);
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
    this.init();
    this.ctx.clearRect(0, 0, width, height);
  }
}

export default Game;
