import ImgResource from "./imgResource";

class Brick extends ImgResource {
  constructor(props, x, y) {
    console.log(props);
    super(props);
    this.x = x + 10;
    this.y = y + 10;
    this.width = 32;
    this.height = 32;
  }
}

export default Brick;
