import { IBrick } from "../types/brick";
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
  brickContainer: Array<IBrick>;
  timer: any;
  ctx: any;
  updateStage: any;
  pause: boolean;
  constructor() {
    this.width = 600;
    this.height = 600;
    this.bulletContainer = [];
    this.brickContainer = [];
    this.pause = false;
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
    return;
    this.ctx.strokeStyle = "red";
    this.ctx.strokeRect(
      observeObj.x,
      observeObj.y,
      observeObj.width,
      observeObj.height
    );
    this.ctx.font = "12px Microsoft YaHei";
    this.ctx.fillText(
      `(${Math.round(observeObj.x)},${Math.round(observeObj.y)})`,
      observeObj.x,
      observeObj.y
    );
  };

  drawJetfight = item => {
    this.ctx.drawImage(item.img, item.x, item.y, item.width, item.height);
  };

  drawBullet = () => {
    if (this.bulletContainer.length > 0) {
      this.bulletContainer.forEach((item, index) => {
        if (item.y <= 0) {
          this.bulletContainer.splice(index, 1);
        }
        this.debug(item);
        this.ctx.drawImage(item.img, item.x, item.y, item.width, item.height);
      });
    }
  };

  drawBrick = () => {
    if (this.brickContainer.length > 0) {
      this.brickContainer.forEach((item, index) => {
        if (item.destory) {
          this.brickContainer.splice(index, 1);
        }
        this.debug(item);
        this.ctx.drawImage(item.img, item.x, item.y, item.width, item.height);
      });
    }
  };
}

export default Singleton.getInstance();
