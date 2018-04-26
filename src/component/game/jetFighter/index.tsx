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

  componentDidMount() {
    const canvas: any = document.getElementById("stage");
    const ctx = canvas.getContext("2d");
    const img = new Image(); // Create new img element
    img.src = require("./img/jet_fighter.png"); // Set source path
    img.onload = () => {
      ctx.drawImage(img, 100, 100, 50, 50);
    };
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
