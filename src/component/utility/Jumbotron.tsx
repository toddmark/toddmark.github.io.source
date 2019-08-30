// eslint-disable-next-line
import React from "react";
import { Link } from "react-router-dom";
import Clock from "./clock";

const Jumbotron = (props: any) => (
  <div>
    <div className="jumbotron shadow">
      <p style={{ marginTop: 15 }} className="text-center">
        {props.content.title}
      </p>
      <div className="row">
        <div className="col">
          <Link className="btn btn-dark btn-block" to="/blog">
            Blog
          </Link>
        </div>
        <div className="col">
          <Link className="btn btn-dark btn-block" to="/hello">
            Mill
          </Link>
        </div>
      </div>
      <div style={{ width: 200, margin: "20px auto" }}>
        <img
          className="img-thumbnail"
          src="https://unsplash.it/200/300/?random"
          alt=""
        />
        <Clock />
      </div>
    </div>
  </div>
);

export default Jumbotron;
