import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../component/home.less";
import { hot } from "react-hot-loader/root";

// eslint-disable-next-line no-unused-vars
import React, { Suspense, Fragment } from "react";
import {
  Route,
  Switch,
  // BrowserRouter as Router,
  HashRouter as Router
} from "react-router-dom";

const Hello = React.lazy(() =>
  import(/* webpackChunkName: 'Hello' */ "../component/Hello.jsx")
);
const About = React.lazy(() =>
  import(/* webpackChunkName: 'About'*/ "../component/About.jsx")
);

// sandbox
const Sandbox = React.lazy(() =>
  import(/* webpackChunkName: 'Sandbox'*/ "../component/sandbox/Index.jsx")
);
const BinaryTree = React.lazy(() =>
  import(
    /* webpackChunkName: 'binaryTree'*/ "../component/sandbox/binaryTree/Index.js"
  )
);
const RandomSelect = React.lazy(() =>
  import(
    /* webpackChunkName: 'RandomSelect'*/ "../component/sandbox/randomSelect/Index.js"
  )
);
const Home = React.lazy(() =>
  import(/* webpackChunkName: 'Home'*/ "../component/Home.tsx")
);
const PingPang = React.lazy(() =>
  import(/* webpackChunkName: 'Game'*/ "../component/game/pingpang.jsx")
);
const JetFighter = React.lazy(() =>
  import(
    /* webpackChunkName: 'JetFighter'*/ "../component/game/jetFighter/Index"
  )
);

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
