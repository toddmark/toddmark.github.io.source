import ImgResource from "./imgResource";
class JetFighter extends ImgResource {
  shoot: boolean;
  shootHold: boolean;
  event: {};
  // keyBoarnEvent: Function;
  private speed = 5;
  constructor(props) {
    super(props);
    this.x = 0;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.event = {};
    this.shoot = false;
    this.shootHold = false;
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
  public fire = bullet => {
    console.log("fire");
    this.shoot = true;
  };
}

export default JetFighter;
