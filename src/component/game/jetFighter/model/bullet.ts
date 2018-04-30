import ImgResource from "./imgResource";

export interface IBullet {
  img: HTMLElement;
  x: number;
  y: number;
  width: number;
  height: number;
}
class Bullet extends ImgResource {
  shoot: boolean;
  timer: any;
  constructor(props, x, y) {
    super(props);
    this.x = x + 18;
    this.y = y - 25;
    this.width = 16;
    this.height = 16;
    this.move();
  }
  private move = () => {
    this.timer = setInterval(() => {
      if (this.y < 0) {
        clearInterval(this.timer);
        console.log("123");
      }
      console.log("456");
      this.y -= 5;
    }, 1000 / 60);
  };
}

export default Bullet;
