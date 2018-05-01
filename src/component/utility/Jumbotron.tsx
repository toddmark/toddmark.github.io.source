import React from "react";
import { Link } from "react-router-dom";

import Clock from "./clock";

const Jumbotron = (props: any) => (
  <div>
    <div className="jumbotron">
      <div className="row">
        <div className="col">
          <a className="btn btn-primary btn-block" href="/blog">
            Blog
          </a>
        </div>
        <div className="col">
          <Link className="btn btn-default btn-block" to="/hello">
            Mill
          </Link>
        </div>
      </div>
      <p style={{ marginTop: 15 }} className="text-primary">
        {props.content.title}
      </p>
      <div style={{ width: 200 }}>
        <img
          className="img-thumbnail"
          src="https://unsplash.it/200/300/?random"
          alt=""
        />
        <Clock />
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
  </div>
);

export default Jumbotron;
