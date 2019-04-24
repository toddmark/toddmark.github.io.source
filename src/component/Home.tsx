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
        <div className="container-fluid">
          <Nav />
          <div className="row">
            <div className="container">
              {words.words.map(item => {
                return <WordCard word={item} />;
                // return (
                //   <div className="col-sm-3">
                //     <div className="card">
                //       <div className="card-body">
                //         <h5 className="card-title">{item.text}</h5>
                //         <span>{Moment(item.date).format("YYYY年M月DD日")}</span>
                //         <p className="card-text">{item.context}</p>
                //         <p className="card-text">{item.trans}</p>
                //         <a
                //           target="_blank"
                //           href={item.url}
                //           className="btn btn-primary"
                //         >
                //           Look up
                //         </a>
                //       </div>
                //     </div>
                //   </div>
                // );
              })}
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
        </p>
      </div>
    );
  }
}
