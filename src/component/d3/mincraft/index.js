// eslint-disable-next-line no-unused-vars
import React, {Component} from "react";
// import rd3 from 'react-d3-library';
import node from "./mincraftNode.js";
// const update = require("./mincraftNode.js");
import $ from "jquery";

// const RD3Component = rd3.Component;

class Mincraft extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $("#container").append(node.node);
  }

  resetPaint() {
    node.update();
  }

  render() {
    return (
      <div className="container">
        <div style={{marginTop: 20}} className="panel panel-info">
          <div className="panel-heading">Tools</div>
          <div className="panel-body">
            <div className="btn-group">
              <button type="button" className="btn btn-danger" onClick={this.resetPaint}>Clean</button>
              <button type="button" className="btn btn-primary" onClick={this.resetPaint}>Export</button>
            </div>
          </div>
        </div>
        <div id="container"></div>
      </div>
    );
  }
}

export default Mincraft;