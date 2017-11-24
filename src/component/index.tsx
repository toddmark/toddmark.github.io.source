// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
// import Particles from "react-particles-js";
import "./index.less";

// utility
// import Carousel from './utility/carousel.jsx';
const Jumbotron = require("./utility/Jumbotron.jsx");

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
