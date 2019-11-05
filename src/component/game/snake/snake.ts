class Game {
  canvas: HTMLCanvasElement;
  map: Array<Array<number>>;
  ctx: any;
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.map = [[1, 1, 1, 0, 1, 1, 1], [0, 1, 0, 0, 1, 0, 0]];
  }

  start() {
    this.canvas.width = 900;
    this.canvas.height = 900;
    this.updateCanvas();
  }

  updateCanvas() {
    this.ctx.fillRect(10, 10, 100, 100);
  }

  clearCanvas() {
    this.ctx.clearCanvas();
  }
}

export default Game;
