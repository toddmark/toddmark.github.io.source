import * as React from "react";

import Nav from "../../navbar/index";

interface IStageState {
  bbc: string;
}

class Stage extends React.Component<{}, IStageState> {
  constructor(props) {
    super(props);
    this.state = {
      bbc: "123"
    };
  }
  render() {
    return (
      <div>
        <Nav />
        <div style={{ margin: "0 auto", width: 600 }}>
          <canvas
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
