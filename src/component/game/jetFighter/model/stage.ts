import { IBrick } from "../types/brick";
import { IBullet } from "../types/bullet";

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
  bulletContainer: Array<IBullet>;
  brickContainer: Array<IBrick>;
  ctx: any;
  pause: boolean;
  updateStage: () => void;
  timer: any;
  createBrick: () => void;
  brickTimer: any;
  brickTimerInterval: number;
  constructor() {
    this.width = 800;
    this.height = 800;
    this.bulletContainer = [];
    this.brickContainer = [];
    this.pause = false;
    this.brickTimerInterval = 500;
  }

  init = () => {
    const canvas: any = document.getElementById("stage");
    this.ctx = canvas.getContext("2d");
    this.pause = false;
    this.timer = setInterval(this.updateStage, 1000 / 60);
    this.brickTimer = setInterval(this.createBrick, this.brickTimerInterval);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    clearInterval(this.brickTimer);
  };

  debug = observeObj => {
    // return;
    this.ctx.strokeStyle = "red";
    this.ctx.strokeRect(
      observeObj.x,
      observeObj.y,
      observeObj.width,
      observeObj.height
    );
    this.ctx.font = "12px Microsoft YaHei";
    this.ctx.fillStyle = "#000";
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
        if (item.destory) {
          this.bulletContainer.splice(index, 1);
          return;
        }
        // this.debug(item);
        this.ctx.drawImage(item.img, item.x, item.y, item.width, item.height);
      });
    }
  };

  drawBrick = () => {
    if (this.brickContainer.length > 0) {
      this.brickContainer.forEach((item, index) => {
        if (item.destory) {
          this.brickContainer.splice(index, 1);
          return;
        }
        this.debug(item);
        this.ctx.drawImage(
          item.img,
          item.x,
          item.y,
          item.width,
          item.height * item.blood / item.totalBlood
        );
      });
    }
  };
}

export default Singleton.getInstance();
