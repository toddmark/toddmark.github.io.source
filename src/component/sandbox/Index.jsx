import React from "react";
// import { Router, Route, Link, hashHistory } from "react-router";

import Nav from "../navbar";
// import BinaryTree from "./binaryTree/Index";
import RandomSort from "./demos/randomSort";

class Sandbox extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container-fluid">
          <h4 class="text-primary text-center mt-3">Welcome to my Sandbox</h4>
          <h3 class="text-info mt-2">random sort</h3>
          <div class="border p-2">
            <RandomSort />
          </div>
          <h3></h3>
        </div>
      </div>
    );
  }
}

export default Sandbox;
