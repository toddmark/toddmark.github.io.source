import "bootstrap/dist/css/bootstrap.min.css";

// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Minecraft from "../component/d3/mincraft";
import { hot } from "react-hot-loader/root";

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
