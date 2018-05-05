import * as React from "react";
import Nav from "../../navbar/index";

import { Stage } from "./main";

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
      </div>
    );
  }
}

export default CanvasContainer;
