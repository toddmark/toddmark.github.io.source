import ImgResource from "./imgResource";
const moonImg = require("../img/moon.png");

class Singleton extends ImgResource {
  static instance: Singleton;
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(moonImg);
    }
    return Singleton.instance;
  }
  width: number;
  height: number;
  constructor(props, x = 0, y = 200) {
    super(props);
    this.width = 50;
    this.height = 50;
    this.x = x;
    this.y = y;
  }
}

export default Singleton.getInstance();
