import { IBullet } from "../types/bullet";

class Singleton {
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
  private static instance: Singleton;
  width: number;
  height: number;
  bulletContainer: Array<IBullet>;
  timer: any;
  ctx: any;
  updateStage: any;
  constructor() {
    this.width = 600;
    this.height = 600;
    this.bulletContainer = [];
  }

  init = () => {
    const canvas: any = document.getElementById("stage");
    this.ctx = canvas.getContext("2d");
    this.timer = setInterval(this.updateStage, 1000 / 60);
  };

  stopTimer = () => {
    clearInterval(this.timer);
  };

  debug = observeObj => {
    this.ctx.strokeStyle = "red";
    this.ctx.strokeRect(
      observeObj.x,
      observeObj.y,
      observeObj.width,
      observeObj.height
    );
    this.ctx.font = "12px Microsoft YaHei";
    this.ctx.fillText(
      `(${observeObj.x},${observeObj.y})`,
      observeObj.x,
      observeObj.y
    );
  };

  drawBullet = () => {
    if (this.bulletContainer.length > 0) {
      this.bulletContainer.forEach((item, index) => {
        this.debug(item);
        if (item.y <= 0) {
          this.bulletContainer.splice(index, 1);
        }
        this.ctx.drawImage(item.img, item.x, item.y, item.width, item.height);
      });
    }
  };

  drawBrick = brick => {
    this.ctx.drawImage(brick.img, brick.x, brick.y, brick.width, brick.height);
  };
}

export default Singleton.getInstance();
