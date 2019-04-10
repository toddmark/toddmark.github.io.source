// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
// import rd3 from "react-d3-library";
// const RD3Component = rd3.Component;
import $ from "jquery";

import node from "./BinaryTreeNode.js";
import Nav from "../../navbar";

import "./binaryTree.less";

export default class BinaryTree extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      distance: 0
    };
  }

  componentDidMount() {
    this.progressAnimate();
    $("#container").append(node.node);
    console.log(node);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progressAnimate() {
    // const time = 1;
    const step = 500;
    const self = this;
    let distance = 0;
    this.timer = setInterval(function() {
      distance += 10;
      if (distance > 100) {
        node.regenerate();
        distance = 0;
        // clearInterval(timer);
      }
      self.setState({
        distance: distance
      });
    }, step);
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="progress">
          <div
            className="progress-bar progress-bar-info progress-bar-striped"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: `${this.state.distance}%` }}
          >
            {this.state.distance}%
          </div>
        </div>
        <div id="container" />
      </div>
    );
  }
}
