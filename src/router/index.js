import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// eslint-disable-next-line no-unused-vars
import React, { Suspense } from "react";
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
  import(/* webpackChunkName: 'About'*/ "../component/about.jsx")
);

// sandbox
const Sandbox = React.lazy(() =>
  import(/* webpackChunkName: 'Sandbox'*/ "../component/sandbox/index.jsx")
);
import BinaryTree from "../component/sandbox/binaryTree";
import RandomSelect from "../component/sandbox/randomSelect";

import Index from "../component/index.tsx";
import game from "../component/game/game.jsx";
import JetFighter from "../component/game/jetFighter/index";
import { Fragment } from "react";

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
            <Route exact path="/" component={Index} />
            <Route path="/hello" component={createComponent(Hello)} />
            <Route path="/game" component={game} />
            <Route path="/jetfighter" component={JetFighter} />
            <Route path="/about" component={createComponent(About)} />
            <Route exact path="/sandbox" component={createComponent(Sandbox)} />
            <Route path="/sandbox/binaryTree" component={BinaryTree} />
            <Route path="/sandbox/randomSelect" component={RandomSelect} />
          </Fragment>
        </Switch>
      </Router>
    );
  }
}

export default Root;
