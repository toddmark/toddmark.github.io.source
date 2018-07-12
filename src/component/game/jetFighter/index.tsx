import * as React from "react";
import Nav from "../../navbar/index";

import { jetFighter, Stage } from "./main";

class CanvasContainer extends React.Component<{}, {}> {
  componentDidMount() {
    Stage.init();
  }

  componentWillUnmount() {
    Stage.stopTimer();
  }

  render() {
    return (
      <div>
        <Nav />
        <div style={{ margin: "15px auto", width: Stage.width }}>
          <canvas
            id="stage"
            style={{ border: "1px solid #ccc" }}
            width={Stage.width}
            height={Stage.height}
          />
        </div>
        <div style={{ margin: "0 auto", width: Stage.width }}>
          <div className="btn-group">
            <button
              className="btn btn-info"
              onClick={() => {
                Stage.pause = !Stage.pause;
              }}
            >
              暂停{Stage.pause}
            </button>
            <button
              className="btn btn-default"
              onClick={() => {
                jetFighter.blood = 3;
                jetFighter.destory = false;
                Stage.pause = false;
              }}
            >
              复活
            </button>
            <button
              className="btn btn-info"
              onClick={() => {
                jetFighter.blood = 9999;
              }}
            >
              无敌
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CanvasContainer;
