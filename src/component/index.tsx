import React, { Component } from "react";
import "./index.less";

import Jumbotron from "./utility/Jumbotron";

export default class Index extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="container flex-parent">
          <Jumbotron content={{ title: "Welcome, my visitors !" }} />
        </div>
      </div>
    );
  }
}
