import { IBullet } from "./bullet";

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
  private constructor() {
    this.width = 600;
    this.height = 600;
    this.bulletContainer = [];
  }
}

export default Singleton.getInstance();
