import React, { Component } from "react";
import "./index.less";

import Jumbotron from "./utility/Jumbotron"

export default class Index extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="container flex-parent">
          <Jumbotron content={{ title: "Welcome, Visitors!" }} />
        </div>
      </div>
    );
  }
}
