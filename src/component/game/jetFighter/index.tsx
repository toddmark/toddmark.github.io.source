import * as React from "react";
import Nav from "../../navbar/index";
import JetFighter from "./jetFighter";

const imgSrc = require("./img/jet_fighter.png");
const jetFighter = new JetFighter(imgSrc);

class Stage extends React.Component<{}, {}> {
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
    setInterval(() => {
      ctx.clearRect(0, 0, 600, 600);
      ctx.drawImage(
        jetFighter.img,
        jetFighter.x,
        jetFighter.y,
        jetFighter.width,
        jetFighter.height
      );
      for (const i of Object.keys(jetFighter.event)) {
        if (jetFighter.event[i].active && jetFighter.event[i].action) {
          jetFighter.event[i].action();
        }
      }
    }, 1000 / 60);
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
        <div style={{ margin: "0 auto", width: 600 }}>
          <canvas
            id="stage"
            style={{ border: "1px solid #ccc" }}
            width={600}
            height={600}
          />
        </div>
      </div>
    );
  }
}

export default Stage;
