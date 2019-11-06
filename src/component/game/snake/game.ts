class Game {
  canvas: HTMLCanvasElement;
  map: Array<Array<number>>;
  ctx: any;
  timer: any;
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
    this.timer = null;
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
        temp[i].push(1);
      }
    }
    this.map = temp;
    const fn = () => {
      this.updateCanvas();
      this.timer = window.requestAnimationFrame(fn);
    };
    this.timer = window.requestAnimationFrame(fn);
  }

  updateCanvas() {
    this.clearCanvas();
    this.ctx.strokeStyle = "#fff";
    this.ctx.fillStyle = "rgba(0,0,0,0.3)";
    console.count("1");
    for (let i = 0; i < this.mapSize.row; i++) {
      for (let j = 0; j < this.mapSize.col; j++) {
        // this.ctx.strokeRect(
        //   i * this.mapSize.width / this.mapSize.col,
        //   j * this.mapSize.height / this.mapSize.row,
        //   this.mapSize.width / this.mapSize.col, this.mapSize.height / this.mapSize.row);
        // this.ctx.fillRect(
        //   i * this.mapSize.width / this.mapSize.col,
        //   j * this.mapSize.height / this.mapSize.row,
        //   this.mapSize.width / this.mapSize.col, this.mapSize.height / this.mapSize.row);
      }
    }
  }

  clearCanvas() {
    this.ctx.fillStyle = "rgba(0,0,0,0)";
    this.ctx.fillRect(0, 0, 600, 600);
  }
}

export default Game;
