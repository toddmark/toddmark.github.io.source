// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
// import rd3 from 'react-d3-library';
import node from "./mincraftNode.js";
// const update = require("./mincraftNode.js");
import $ from "jquery";
import { ROW, COLUMNS, RECTSIZE } from "./constant";

// const RD3Component = rd3.Component;

class Mincraft extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $("#container").append(node.node);
  }

  resetPaint() {
    node.update("reset");
  }

  renderCanvas() {
    var mySVG = $("#container").find("svg")[0];
    var loader = new Image();
    loader.onload = function() {
      var viewImg = $("#img")[0];
      var can = document.createElement("canvas");
      can.width = ROW * RECTSIZE;
      can.height = COLUMNS * RECTSIZE;
      var ctx = can.getContext("2d");
      loader.width = can.width;
      loader.height = can.height;
      ctx.drawImage(loader, 0, 0, loader.width, loader.height);
      can.src = can.toDataURL();
      viewImg.src = can.toDataURL();
    };
    var svgAsXML = new XMLSerializer().serializeToString(mySVG);
    loader.src = "data:image/svg+xml," + encodeURIComponent(svgAsXML);
  }

  render() {
    return (
      <div className="container">
        <div style={{ marginTop: 20 }} className="panel panel-info">
          <div style={{ marginBottom: 10 }} className="panel-heading">
            工具栏
          </div>
          <div style={{ marginBottom: 10 }} className="panel-body">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.resetPaint}
              >
                清空
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.renderCanvas}
              >
                生成 Canvas
              </button>
            </div>
            <img id="img" width="200" />
          </div>
        </div>
        <div id="container"></div>
      </div>
    );
  }
}

export default Mincraft;
