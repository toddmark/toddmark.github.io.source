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
    const ctx = stage.ctx;
    ctx.strokeStyle = "#369";
    ctx.strokeRect(0, stage.height - this.height, stage.width, this.height);
    ctx.fillStyle = "#eee";
    ctx.fillRect(0, stage.height - this.height, stage.width, this.height);
    ctx.font = "12px Microsoft YaHei";
    ctx.fillStyle = "#000";
    ctx.fillText(
      "Role play panel( text from canvas)",
      10,
      stage.height - this.height / 2
    );
  }

  loadImgResource(img) {
    console.log(img);
  }
}

export default Singleton.getInstance();
