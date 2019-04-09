import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// eslint-disable-next-line no-unused-vars
import React, { Suspense } from "react";
import { Component } from "react";
import {
  Route,
  Switch,
  // BrowserRouter as Router,
  HashRouter as Router,
} from "react-router-dom";

import LazyLoader from "./lazyloader";
const Loading = function() {
  return <div>Loading...</div>;
};

import Hello from "../component/Hello.jsx";
// import Hello from "bundle-loader?lazy&name=hello!../component/hello.jsx";
// const Hello = React.lazy(() => import("../component/Hello.jsx"));
import About from "../component/about.jsx";
// const About = React.lazy(() => import("../component/about.jsx"));
// const createComponent = component => () => {
//   let AsyncComponent = (
//     <LazyLoader load={component}>
//       {Async => {
//         // console.log(Async);
//         return Async ? <Async /> : <Loading />;
//       }}
//     </LazyLoader>
//   );
//   return AsyncComponent;
// };
// function createComponent(Component) {
//   console.log(Component);
//   return props => (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Component {...props} />
//     </Suspense>
//   );
// }



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
            <Route path="/hello" component={<div>123</div>} />
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
