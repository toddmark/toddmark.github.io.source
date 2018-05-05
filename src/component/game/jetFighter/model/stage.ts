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
}

export default Singleton.getInstance();
