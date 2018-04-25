import "bootstrap/dist/css/bootstrap.min.css";

// eslint-disable-next-line no-unused-vars
import React from "react";
import { Component } from "react";
import {
  Route,
  Switch,
  // BrowserRouter as Router,
  HashRouter as Router
} from "react-router-dom";

import Hello from "../component/hello.jsx";
import About from "../component/about.jsx";

import "bootstrap";

// sandbox
import Sandbox from "../component/sandbox/index.jsx";
import BinaryTree from "../component/sandbox/binaryTree";
import RandomSelect from "../component/sandbox/randomSelect";

import Index from "../component/index.tsx";
import game from "../component/game/game.jsx";
import JetFighter from "../component/game/jetFighter/index";

class Root extends Component {
  render() {
    return (
      <div>
        <Router basename="/">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/hello" component={Hello} />
            <Route path="/game" component={game} />
            <Route path="/jetfighter" component={JetFighter} />
            <Route path="/about" component={About} />
            <Route exact path="/sandbox" component={Sandbox} />
            <Route path="/sandbox/binaryTree" component={BinaryTree} />
            <Route path="/sandbox/randomSelect" component={RandomSelect} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Root;
