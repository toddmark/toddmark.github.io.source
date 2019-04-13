import React, { Component } from "react";
import "./home.less";
// import Jumbotron from "./utility/Jumbotron";
import Nav from "./navbar";
import Moment from "moment";
const words = require("../../build/words");

export default class Home extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(words);
    return (
      <div>
        <Nav />
        {/* <div className="container-fluid flex-parent">
          <Jumbotron content={{ title: "Welcome, my visitors !" }} />
        </div> */}
        <div className="container">
          <div className="row">
            {words.words.map(item => {
              return (
                <div className="col-sm-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{item.text}</h5>
                      <span>{Moment(item.date).format("YYYY年M月DD日")}</span>
                      <p className="card-text">{item.context}</p>
                      <p className="card-text">{item.trans}</p>
                      <a
                        target="_blank"
                        href={item.url}
                        className="btn btn-primary"
                      >
                        Look up
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
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
        </p>
      </div>
    );
  }
}
