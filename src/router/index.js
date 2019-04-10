import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
  import(/* webpackChunkName: 'binaryTree'*/ "../component/sandbox/binaryTree/Index.js")
);
const RandomSelect = React.lazy(() =>
  import(/* webpackChunkName: 'RandomSelect'*/ "../component/sandbox/randomSelect/Index.js")
);
const Home = React.lazy(() =>
  import(/* webpackChunkName: 'Home'*/ "../component/Home.tsx")
);
const Game = React.lazy(() =>
  import(/* webpackChunkName: 'Game'*/ "../component/game/Game.jsx")
);
const JetFighter = React.lazy(() =>
  import(/* webpackChunkName: 'JetFighter'*/ "../component/game/jetFighter/Index")
);

function createComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
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
            <Route path="/game" component={createComponent(Game)} />
            <Route path="/jetfighter" component={createComponent(JetFighter)} />
            <Route path="/about" component={createComponent(About)} />
            <Route exact path="/sandbox" component={createComponent(Sandbox)} />
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

export default Root;
