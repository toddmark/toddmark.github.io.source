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

// import LazyLoader from "./lazyloader";
// const Loading = function() {
//   return <div>Loading...</div>;
// };

// import Hello from "../component/Hello.jsx";
// import Hello from "bundle-loader?lazy&name=hello!../component/hello.jsx";
const Hello = React.lazy(() =>
  import(/* webpackChunkName: 'Hello' */ "../component/Hello.jsx")
);
const About = React.lazy(() =>
  import(/* webpackChunkName: 'About'*/ "../component/about.jsx")
);
function createComponent(Component) {
  console.log(Component);
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

// sandbox
import Sandbox from "../component/sandbox/index.jsx";
import BinaryTree from "../component/sandbox/binaryTree";
import RandomSelect from "../component/sandbox/randomSelect";

import Index from "../component/index.tsx";
import game from "../component/game/game.jsx";
import JetFighter from "../component/game/jetFighter/index";
import { Fragment } from "react";

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
            <Route exact path="/sandbox" component={Sandbox} />
            <Route path="/sandbox/binaryTree" component={BinaryTree} />
            <Route path="/sandbox/randomSelect" component={RandomSelect} />
          </Fragment>
        </Switch>
      </Router>
    );
  }
}

export default Root;
