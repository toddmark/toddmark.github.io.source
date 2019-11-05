import React from "react";

// import Nav from "../navbar";
const s = require("./index.less");

console.log(s);

class Snake extends React.Component {
  render() {
    return (
      <div className={s["snake-container"]}>
        <canvas></canvas>
      </div>
    );
  }
}
export default Snake;
