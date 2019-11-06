import React from "react";
import Game from "./game";

// import Nav from "../navbar";
const styles = require("./index.less");

class Snake extends React.Component {
  componentDidMount() {
    // tslint:disable-next-line: no-unused-expression
    document.title = "E-cology";
    const game = new Game(document.getElementById("canvas"));
    game.init();
  }
  render() {
    return (
      <div className={styles["snake-container"]}>
        <canvas id="canvas"></canvas>
      </div>
    );
  }
}
export default Snake;
