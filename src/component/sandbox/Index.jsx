import React from "react";
// import { Router, Route, Link, hashHistory } from "react-router";

import Nav from "../navbar";
// import BinaryTree from "./binaryTree/Index";
import RandomSort from "./demos/randomSort";
import TrafficLight from "./demos/trafficLight";

class Sandbox extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container-fluid">
          <h4 class="text-primary text-center mt-3">Welcome to my Sandbox</h4>
          <h3 class="text-info mt-2 pb-2 border-bottom">random sort</h3>
          <RandomSort />
          <h3 class="text-info mt-2 pb-2 border-bottom">Traffic Light</h3>
          <TrafficLight />
        </div>
      </div>
    );
  }
}

export default Sandbox;
