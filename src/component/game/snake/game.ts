class Game {
  canvas: HTMLCanvasElement;
  map: Array<Array<number>>;
  ctx: any;
  timerFrame: any;
  timerInterval: any;
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
    this.timerFrame = null;
    this.timerInterval = null;
  }

  start() {
    const { width, height } = this.mapSize;
    this.canvas.width = width;
    this.canvas.height = height;
  }

  init() {
    const { width, height } = this.mapSize;
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx.fillStyle = "rgb(0,0,0,.3)";
    const temp = [];
    for (let i = 0; i < this.mapSize.row; i++) {
      temp[i] = [];
      for (let j = 0; j < this.mapSize.col; j++) {
        temp[i].push(0);
      }
    }
    this.map = temp;
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

  updateMap() {
    const newMap = JSON.parse(JSON.stringify(this.map));
    if (!this.timerInterval) {
      this.timerInterval = setInterval(() => {
        let x: number = Math.floor(Math.random() * 20);
        let y: number = Math.floor(Math.random() * 20);
        while (newMap[x][y] === 1) {
          x = Math.floor(Math.random() * 20);
          y = Math.floor(Math.random() * 20);
        }
        newMap[x][y] = 1;
        console.log(x, y);
        this.updateCanvas(newMap, x, y);
      }, 10);
    }
  }

  updateCanvas(newMap, x: number, y: number) {
    this.ctx.strokeStyle = "#fff";
    // console.count("1");
    if (this.map[x][y] !== newMap[x][y]) {
      // this.ctx.fillStyle = "rgba(0,0,0,0.7)";
      // this.ctx.fillRect(
      //   i * this.mapSize.width / this.mapSize.col,
      //   j * this.mapSize.height / this.mapSize.row,
      //   this.mapSize.width / this.mapSize.col, this.mapSize.height / this.mapSize.row);
      this.ctx.fillStyle = "rgba(255,255,255,0.3)";
      this.ctx.fillRect(
        (x * this.mapSize.width) / this.mapSize.col,
        (y * this.mapSize.height) / this.mapSize.row,
        this.mapSize.width / this.mapSize.col,
        this.mapSize.height / this.mapSize.row
      );
    }
    // this.ctx.strokeRect(
    //   i * this.mapSize.width / this.mapSize.col,
    //   j * this.mapSize.height / this.mapSize.row,
    //   this.mapSize.width / this.mapSize.col, this.mapSize.height / this.mapSize.row);
  }

  clearCanvas() {
    this.ctx.fillStyle = "rgba(0,0,0,0)";
    this.ctx.fillRect(0, 0, 600, 600);
  }
}

export default Game;
