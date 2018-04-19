import React, { Component } from "react";
import "./index.less";

import Jumbotron from "./utility/Jumbotron";

const a = 123;

export default class Index extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="container flex-parent">
          {/* 123 */}
          <Jumbotron content={{ title: "Welcome, Visitors!" }} />
        </div>
      </div>
    );
  }
}
