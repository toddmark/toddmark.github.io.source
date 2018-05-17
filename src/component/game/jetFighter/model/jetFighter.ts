import ImgResource from "./imgResource";

// utility
import { isCrossing } from "../utility/isCrossing";

import { IStage } from "../types/stage";

class JetFighter extends ImgResource {
  shoot: boolean;
  shootHold: boolean;
  event: {};
  blood: number;
  destory: boolean;
  stage: IStage;
  // keyBoarnEvent: Function;
  constructor(props, Stage) {
    super(props);
    this.width = 133 / 3;
    this.height = 190 / 3;
    this.stage = Stage;
    this.x = (this.stage.width - this.width) / 2;
    this.y = (this.stage.height - this.height) / 2;
    this.event = {};
    this.shoot = false;
    this.destory = false;
    this.speed = 5;
    this.blood = 1;
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
    if (this.y > Stage.height - this.height - 50) {
      this.y = Stage.height - this.height - 50;
    }
    if (this.y < 0) {
      this.y = 0;
    }
  };

  detectCollide = bricks => {
    for (const item of bricks) {
      const result = isCrossing(this, item);
      if (result) {
        item.destory = true;
        this.blood--;
      }
      if (this.blood === 0) {
        this.destory = true;
        this.stage.pause = true;
      }
    }
  };
}

export default JetFighter;
