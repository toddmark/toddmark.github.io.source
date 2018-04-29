import * as React from "react";
import Nav from "../../navbar/index";
import JetFighter from "./jetFighter";
import Stage from "./stage";

import { debug } from "./console";

const imgSrc = require("./img/jet_fighter.png");
const jetFighter = new JetFighter(imgSrc);

function updateState(ctx) {
  ctx.clearRect(0, 0, 600, 600);

  // active keyboard event
  for (const i of Object.keys(jetFighter.event)) {
    if (jetFighter.event[i].active && jetFighter.event[i].action) {
      jetFighter.event[i].action();
    }
  }

  if (jetFighter.x > Stage.width - jetFighter.width) {
    // console.log(jetFighter.x , Stage.width - jetFighter.width)
    jetFighter.x = Stage.width - jetFighter.width;
  }
  if (jetFighter.x < 0) {
    jetFighter.x = 0;
  }

  debug(ctx, jetFighter);
  ctx.drawImage(
    jetFighter.img,
    jetFighter.x,
    jetFighter.y,
    jetFighter.width,
    jetFighter.height
  );
}

class CanvasContainer extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const canvas: any = document.getElementById("stage");
    const ctx = canvas.getContext("2d");
    jetFighter.img.onload = () => {
      ctx.drawImage(
        jetFighter.img,
        jetFighter.x,
        jetFighter.y,
        jetFighter.width,
        jetFighter.height
      );
    };
    setInterval(() => updateState(ctx), 1000 / 60);
    document.addEventListener("keydown", event => {
      jetFighter.keyBoardEvent(event.key, true);
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
