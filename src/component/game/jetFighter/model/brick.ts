import { isCrossing } from "../utility/isCrossing";
import ImgResource from "./imgResource";

class Brick extends ImgResource {
  destory: boolean;
  constructor(props, Stage) {
    super(props);
    this.width = 32;
    this.height = 32;
    this.x = Math.round(Math.random() * (Stage.width - this.width));
    // this.y = Math.round(Math.random() * (Stage.height / 2));
    this.y = -this.height;
    this.destory = false;
    this.speed = Math.round(Math.random() * 2) + 1;
  }
  move = boundary => {
    this.timer = setInterval(() => {
      if (this.y > boundary + this.height) {
        clearInterval(this.timer);
        this.destory = true;
      }
      this.y += this.speed;
    }, 1000 / 60);
  };

  detectBoundary = (observer: Array<any>) => {
    observer.forEach((item, index) => {
      // const result = isCrossing(this, item);
      const result = isCrossing(item, this);
      if (result) {
        this.destory = true;
      }
    });
  };
}

export default Brick;
