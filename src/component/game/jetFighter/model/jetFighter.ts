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

  public fire = fire => {
    this.shoot = fire;
  };

  public eventAction = Stage => {
    for (const i of Object.keys(this.event)) {
      if (this.event[i].active && this.event[i].action) {
        this.event[i].action();
      }
    }
    // jetFighter position detect
    if (this.x > Stage.width - this.width) {
      this.x = Stage.width - this.width;
    }
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.y > Stage.height - this.height) {
      this.y = Stage.width - this.width;
    }
    if (this.y < 0) {
      this.y = 0;
    }
  };
}

export default JetFighter;
