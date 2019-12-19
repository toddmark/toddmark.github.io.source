import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../component/home.less";
import universal from "react-universal-component";

import { hot } from "react-hot-loader/root";

// eslint-disable-next-line no-unused-vars
import React, { Suspense, Fragment } from "react";
import {
  Route,
  Switch,
  // BrowserRouter as Router,
  HashRouter as Router
} from "react-router-dom";

const Hello = createComponent(() => import("../component/Hello.jsx"));
const About = createComponent(() => import("../component/About.jsx"));

// sandbox
const Sandbox = createComponent(() => import("../component/sandbox/Index.jsx"));
const BinaryTree = createComponent(() =>
  import("../component/sandbox/binaryTree/Index.js")
);
const RandomSelect = createComponent(() =>
  import("../component/sandbox/randomSelect/Index.js")
);
const Home = createComponent(() => import("../component/Home.tsx"));
const PingPang = createComponent(() =>
  import("../component/game/pingpang.jsx")
);
const JetFighter = createComponent(() =>
  import("../component/game/jetFighter/Index")
);
const Snake = createComponent(() =>
  import("../component/game/greedySnake/index")
);

function createComponent(Component) {
  return universal(Component, {
    loading: (
      <div style={{ marginTop: "45%" }} className="text-center">
        <div className="spinner-border text-danger loading" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    ),
    minDelay: 300
  });
}

class Root extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/hello" component={Hello} />
            <Route path="/game/pingpang" component={PingPang} />
            <Route path="/game/jetfighter" component={JetFighter} />
            <Route path="/game/snake" component={Snake} />

            <Route path="/about" component={About} />
            <Route exact path="/sandbox/index" component={Sandbox} />
            <Route path="/sandbox/binaryTree" component={BinaryTree} />
            <Route path="/sandbox/randomSelect" component={RandomSelect} />
          </Fragment>
        </Switch>
      </Router>
    );
  }
}

export default hot(Root);
