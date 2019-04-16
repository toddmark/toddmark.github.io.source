// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import RootContainer from "../router/d3.js";

ReactDOM.render(
  <AppContainer>
    <RootContainer />
  </AppContainer>,
  document.getElementById("app")
);
