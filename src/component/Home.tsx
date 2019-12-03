// import Jumbotron from "./utility/Jumbotron";
// import Moment from "moment";
import React from "react";
import Particles from "react-particles-js";
import "./home.less";
import Nav from "./navbar";
import propsP from "./particleProps";
// import Moment from "moment";
import WordCard from "./utility/wordCard";
import MouseTrail from "./utility/MouseTrail";
import main from "@toddmark/login-input-component";

const words = require("../../build/words");

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(words);
    return (
      <div>
        <MouseTrail />
        <Particles style={{ position: "fixed", zIndex: -1 }} params={propsP} />
        {/* <div className="container-fluid flex-parent">
          <Jumbotron content={{ title: "Welcome, my visitors !" }} />
        </div> */}
        <Nav />
        <div className="container-fluid">
          <div className="row">
            <div className="container">
              <WordCard words={words} />
            </div>
          </div>
        </div>
        <p style={{ marginTop: 15, fontSize: 12, textAlign: "center" }}>
          Hosted by{" "}
          <a
            href="https://pages.coding.me"
            style={{ fontWeight: "bold", color: "#666" }}
          >
            Coding Pages
          </a>
          <main />
          <main.one />
          <main.two />
        </p>
      </div>
    );
  }
}
