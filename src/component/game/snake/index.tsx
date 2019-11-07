import React from "react";
import Game from "./game";

// import Nav from "../navbar";
const styles = require("./index.less");

class Snake extends React.Component {
  game: Game;
  constructor(props) {
    super(props);
    this.game = null;
  }
  componentDidMount() {
    // tslint:disable-next-line: no-unused-expression
    document.title = "E-cology";
    this.game = new Game(document.getElementById("canvas"));
    this.game.init();
  }
  render() {
    return (
      <div className={styles["snake-container"]}>
        <canvas id="canvas"></canvas>
        <button onClick={() => this.game.pauseGame()}>Pause</button>
        <button onClick={() => this.game.continueGame()}>Continue</button>
      </div>
    );
  }
}
export default Snake;
