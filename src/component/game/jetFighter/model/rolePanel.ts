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
  imgResources: { blood: HTMLImageElement };
  constructor() {
    this.height = 50;
    this.x = 0;
    this.y = 0;
    this.imgResources = { blood: null };
  }

  render(stage, jetFighter) {
    // console.log(stage);
    const ctx = stage.ctx;
    ctx.strokeStyle = "#369";
    ctx.strokeRect(0, stage.height - this.height, stage.width, this.height);
    ctx.fillStyle = "#eee";
    ctx.fillRect(0, stage.height - this.height, stage.width, this.height);
    ctx.font = "12px Microsoft YaHei";
    ctx.fillStyle = "#000";
    ctx.fillText("Your Health: ", 10, stage.height - this.height / 2);

    // render blood
    for (let i = 0; i < jetFighter.blood; i++) {
      ctx.drawImage(
        this.imgResources.blood,
        i * 40 + 200,
        stage.height - this.height + 10,
        30,
        30
      );
    }
  }

  loadImgResource(img) {
    this.imgResources.blood = img;
  }
}

export default Singleton.getInstance();
