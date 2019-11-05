import "bootstrap/dist/css/bootstrap.min.css";

// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import universal from "react-universal-component";
import { hot } from "react-hot-loader/root";

const Minecraft = universal(() => import("../component/d3/mincraft"));

class D3 extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Minecraft} />
      </Router>
    );
  }
}

export default hot(D3);
