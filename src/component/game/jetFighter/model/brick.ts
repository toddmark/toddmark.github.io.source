import ImgResource from "./imgResource";

class Brick extends ImgResource {
  timer: any;
  destory: boolean;
  constructor(props, Stage) {
    super(props);
    this.width = 32;
    this.height = 32;
    this.x = Math.round(Math.random() * (Stage.width - this.width));
    this.y = Math.round(Math.random() * 100);
    this.destory = false;
  }
  move = boundary => {
    this.timer = setInterval(() => {
      if (this.y > boundary) {
        clearInterval(this.timer);
      }
      this.y += 2;
    }, 1000 / 60);
  };

  detectBoundary = (observer: Array<any>) => {
    const brickRight = this.x + this.width;
    const brickBottom = this.y + this.height;
    observer.forEach((item, index) => {
      // x this: brick item: bullet
      const xPosition =
        (item.x > this.x && item.x < brickRight) ||
        (item.x + item.width > this.x && item.x + item.width < brickRight);
      const yPosition =
        (item.y > this.y && item.y < brickBottom) ||
        (item.y + item.height > this.y && item.y + item.height < brickBottom);

      if (xPosition && yPosition) {
        this.destory = true;
      }
    });
  };
}

export default Brick;
