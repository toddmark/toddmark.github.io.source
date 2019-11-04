// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import Nav from "../navbar";

// object
import { Paddle, Ball } from "./paddle.js";
import { Stage } from "./stage.js";

const width = 700;

class Game extends Component {
  componentDidMount() {
    const paddle = Paddle(require("../img/50.jpg"));
    const ball = Ball(require("./ball.png"));
    const stage = Stage();

    paddle.img.onload = function() {
      // stage.drawImage(paddle);
    };

    stage.update = function() {
      ball.move();
      ball.collide(paddle);
    };
    stage.actionRegister("a", function() {
      paddle.moveLeft();
    });
    stage.actionRegister("d", function() {
      paddle.moveRight();
    });
    stage.actionRegister(" ", function() {
      ball.fire();
    });
    stage.draw = function() {
      stage.drawImage(paddle);
      stage.drawImage(ball);
    };
  }

  render() {
    return (
      <div>
        {" "}
        <Nav />
        <div style={{ margin: "0 auto", width: width }}>
          <canvas
            style={{ border: "1px solid #ccc" }}
            id="canvas"
            width={width}
            height="300"
          />
        </div>
      </div>
    );
  }
}

export default Game;
