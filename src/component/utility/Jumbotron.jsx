// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { Link } from "react-router-dom";

const Jumbotron = props => (
  <div>
    <div className="jumbotron">
      <div className="row">
        <div className="col-xs-6">
          <a className="btn btn-primary btn-block" href="/blog">Blog</a>
        </div>
        <div className="col-xs-6">
          <Link className="btn btn-default btn-block" to="/hello">Mill</Link>
        </div>
      </div>
      <p style={{marginTop: 15}} className="text-primary">{props.content.title}</p>
      <div style={{width: 200, height: 300}}>
        <img className="img-thumbnail" src="https://unsplash.it/200/300/?random" alt="" />
      </div>
      <p style={{marginTop: 15, fontSize: 12, textAlign: "center"}}>Hosted by <a href="https://pages.coding.me" style={{fontWeight: "bold", color: "#666"}}>Coding Pages</a></p>
    </div>
  </div>
);

export default Jumbotron;