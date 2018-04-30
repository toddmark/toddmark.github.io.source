import * as React from "react";
import Nav from "../../navbar/index";
import Bullet from "./model/bullet";
import JetFighter from "./model/jetFighter";
import Stage from "./model/stage";

import { debug } from "./model/console";

const jetFighterImg = require("./img/jet_fighter.png");
const bulletImg = require("./img/bullet.png");
const jetFighter = new JetFighter(jetFighterImg);

function updateState(ctx) {
  ctx.clearRect(0, 0, 600, 600);
  // active keyboard event
  for (const i of Object.keys(jetFighter.event)) {
    if (jetFighter.event[i].active && jetFighter.event[i].action) {
      jetFighter.event[i].action();
    }
  }

  // jetFighter position detect
  if (jetFighter.x > Stage.width - jetFighter.width) {
    jetFighter.x = Stage.width - jetFighter.width;
  }
  if (jetFighter.x < 0) {
    jetFighter.x = 0;
  }
  if (jetFighter.y > Stage.height - jetFighter.height) {
    jetFighter.y = Stage.width - jetFighter.width;
  }
  if (jetFighter.y < 0) {
    jetFighter.y = 0;
  }

  debug(ctx, jetFighter);
  ctx.drawImage(
    jetFighter.img,
    jetFighter.x,
    jetFighter.y,
    jetFighter.width,
    jetFighter.height
  );

  // draw bullet
  if (Stage.bulletContainer.length > 0) {
    Stage.bulletContainer.forEach((item, index) => {
      debug(ctx, item);
      if (item.y <= 0) {
        Stage.bulletContainer.splice(index, 1);
      }
      ctx.drawImage(item.img, item.x, item.y, item.width, item.height);
    });
  }

  // if (jetFighter.shoot) {
  //   const bullet = new Bullet(bulletImg, jetFighter.x + 18, jetFighter.y - 25,);
  //   console.log(bullet === bullet);
  //   debug(ctx, bullet);
  //   ctx.drawImage(bullet.img, bullet.x, bullet.y, bullet.width, bullet.height);
  // }
}

class CanvasContainer extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const canvas: any = document.getElementById("stage");
    const ctx = canvas.getContext("2d");
    setInterval(() => updateState(ctx), 1000 / 60);
    document.addEventListener("keydown", event => {
      jetFighter.keyBoardEvent(event.key, true);
      if (event.key === " ") {
        const bullet = new Bullet(bulletImg, jetFighter.x, jetFighter.y);
        Stage.bulletContainer.push(bullet);
        jetFighter.fire(bullet);
      }
    });
    document.addEventListener("keyup", event => {
      jetFighter.keyBoardEvent(event.key, false);
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div style={{ margin: "0 auto", width: Stage.width }}>
          <canvas
            id="stage"
            style={{ border: "1px solid #ccc" }}
            width={Stage.width}
            height={Stage.height}
          />
        </div>
      </div>
    );
  }
}

export default CanvasContainer;
