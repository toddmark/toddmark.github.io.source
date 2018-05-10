class Singleton {
  static instance: Singleton;
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
  width: number;
  height: number;
  x: number;
  y: number;
  constructor() {
    this.height = 50;
    this.x = 0;
    this.y = 0;
  }

  render(stage) {
    // console.log(stage);
    stage.ctx.strokeStyle = "#369";
    stage.ctx.strokeRect(
      0,
      stage.height - this.height,
      stage.width,
      this.height
    );
  }

  loadImgResource(img) {
    console.log(img);
  }
}

export default Singleton.getInstance();
