import React from "react";
import Nav from "./navbar";
import Jumbotron from "./utility/Jumbotron.tsx";

import "./about.less";

const imgList = [
  require("./img/steam_bg.png"),
  require("./img/steam_bg.png"),
  require("./img/steam_bg.png"),
  require("./img/steam_bg.png"),
  require("./img/steam_bg.png"),
  require("./img/steam_bg.png")
];

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron content={{ title: "这里是我的简介" }} />
        <div
          id="carousel-example-generic"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            {imgList.map((item, index) => {
              return (
                <li
                  className={index === 0 ? "active" : ""}
                  key={index}
                  data-target="#carousel-example-generic"
                  data-slide-to={index}
                />
              );
            })}
          </ol>
          <div className="carousel-inner" role="listbox">
            {imgList.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    index === 0 ? "carousel-item active" : "carousel-item"
                  }
                >
                  <div className="img-responsive">
                    <img src={imgList[index]} alt="..." />
                  </div>
                  <div className="carousel-caption" />
                </div>
              );
            })}
          </div>
          <a
            className="left carousel-control"
            href="#carousel-example-generic"
            role="button"
            data-slide="prev"
          >
            <span className="glyphicon glyphicon-chevron-left" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#carousel-example-generic"
            role="button"
            data-slide="next"
          >
            <span className="glyphicon glyphicon-chevron-right" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
