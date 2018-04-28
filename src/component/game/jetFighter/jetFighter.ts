class JetFighter {
  img: HTMLImageElement;
  x: number;
  y: number;
  width: number;
  height: number;
  event: {};
  // keyBoarnEvent: Function;
  private speed = 15;
  constructor(src) {
    this.img = new Image(); // Create new img element
    this.img.src = src;
    this.x = 0;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.event = {};
  }
  public keyBoardEvent = (key, active) => {
    this.event[key] = {};
    // console.log(key, this.event[key]);
    this.event[key].active = active;
    switch (key) {
      case "a":
        this.event[key].action = this.moveLeft;
        break;
      case "d":
        this.event[key].action = this.moveRight;
        break;
      case "w":
        this.event[key].action = this.moveUp;
        break;
      case "s":
        this.event[key].action = this.moveDown;
        break;
    }
  };
  public moveLeft = () => {
    this.x -= this.speed;
  };
  public moveRight = () => {
    this.x += this.speed;
  };
  public moveUp = () => {
    this.y -= this.speed;
  };
  public moveDown = () => {
    this.y += this.speed;
  };
}

export default JetFighter;
