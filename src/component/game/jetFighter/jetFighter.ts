class JetFighter {
  img: HTMLImageElement;
  x: number;
  y: number;
  width: number;
  height: number;
  // keyBoarnEvent: Function;
  private speed = 5;
  constructor(src) {
    this.img = new Image(); // Create new img element
    this.img.src = src;
    this.x = 0;
    this.y = 0;
    this.width = 50;
    this.height = 50;
  }
  public keyBoardEvent = key => {
    switch (key) {
      case "a":
        this.moveLeft();
        break;
      case "d":
        this.moveRight();
        break;
      case "w":
        this.moveUp();
        break;
      case "s":
        this.moveDown();
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
