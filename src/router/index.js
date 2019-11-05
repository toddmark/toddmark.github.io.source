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

const Hello = universal(() => import("../component/Hello.jsx"));
const About = universal(() => import("../component/About.jsx"));

// sandbox
const Sandbox = universal(() => import("../component/sandbox/Index.jsx"));
const BinaryTree = universal(() =>
  import("../component/sandbox/binaryTree/Index.js")
);
const RandomSelect = universal(() =>
  import("../component/sandbox/randomSelect/Index.js")
);
const Home = universal(() => import("../component/Home.tsx"));
const PingPang = universal(() => import("../component/game/pingpang.jsx"));
const JetFighter = universal(() =>
  import("../component/game/jetFighter/Index")
);
const Snake = universal(() => import("../component/game/snake/index"));

function createComponent(Component) {
  return props => (
    <Suspense
      fallback={
        <div>
          <div className="spinner-border text-danger loading" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );
}
class Root extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Fragment>
            <Route exact path="/" component={createComponent(Home)} />
            <Route path="/hello" component={createComponent(Hello)} />
            <Route
              path="/game/pingpang"
              component={createComponent(PingPang)}
            />
            <Route
              path="/game/jetfighter"
              component={createComponent(JetFighter)}
            />
            <Route path="/game/snake" component={createComponent(Snake)} />

            <Route path="/about" component={createComponent(About)} />
            <Route
              exact
              path="/sandbox/index"
              component={createComponent(Sandbox)}
            />
            <Route
              path="/sandbox/binaryTree"
              component={createComponent(BinaryTree)}
            />
            <Route
              path="/sandbox/randomSelect"
              component={createComponent(RandomSelect)}
            />
          </Fragment>
        </Switch>
      </Router>
    );
  }
}

export default hot(Root);
