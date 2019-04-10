import React, { Component } from "react";
import "./index.less";
import Jumbotron from "./utility/Jumbotron";

export default class Home extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="container-fluid flex-parent">
          <Jumbotron content={{ title: "Welcome, my visitors !" }} />
        </div>
      </div>
    );
  }
}
