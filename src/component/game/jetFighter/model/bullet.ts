import ImgResource from "./imgResource";

class Bullet extends ImgResource {
  shoot: boolean;
  timer: any;
  speed: number;
  constructor(props, x, y) {
    super(props);
    this.x = x + 16;
    this.y = y - 5;
    this.width = 8;
    this.height = 16;
    this.speed = 10;
    this.move();
  }
  private move = () => {
    this.timer = setInterval(() => {
      if (this.y < 0) {
        clearInterval(this.timer);
      }
      this.y -= this.speed;
    }, 1000 / 60);
  };
}

export default Bullet;
