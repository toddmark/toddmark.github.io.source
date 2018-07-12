import ImgResource from "./imgResource";

class Bullet extends ImgResource {
  shoot: boolean;
  destory: boolean;
  damage: number;
  stage: any;
  constructor(props, x, y, stage) {
    super(props);
    this.x = x + 16;
    this.y = y - 5;
    this.width = 8;
    this.height = 16;
    this.speed = 10;
    this.destory = false;
    this.stage = stage;
    this.damage = 1;
    this.move();
  }
  private move = () => {
    this.timer = setInterval(() => {
      if (this.stage.pause) {
        return;
      }
      if (this.y < 0) {
        clearInterval(this.timer);
        this.destory = true;
      }
      this.y -= this.speed;
    }, 1000 / 60);
  };
}

export default Bullet;
