// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import ReactDOM from "react-dom";

import { AppContainer } from "react-hot-loader";
import RootContainer from "../router/index.js";

console.log(RootContainer);

ReactDOM.render(
  <AppContainer>
    <RootContainer />
  </AppContainer>,
  document.getElementById("app")
);
