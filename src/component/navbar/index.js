// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPath: ""
    };
  }

  componentDidMount() {
    this.setState({
      currentPath: window.location.hash.substr(1)
    });
  }
  render() {
    return (
      <div>
        <nav
          style={{ zIndex: 9, background: "#1b2838" }}
          className="navbar navbar-expand-lg navbar-dark"
          role="navigation"
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <div className="navbar-brand">
                <img
                  style={{ width: 20 }}
                  src={require("../img/cat.png")}
                  alt=""
                />
              </div>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>

            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    Home<span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/hello"
                    className="nav-link"
                    replace={this.state.currentPath === "/hello"}
                    activeStyle={{ color: "#fff", background: "#777" }}
                  >
                    Hello
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="javascript:void(0);"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Game <span className="caret" />
                  </a>
                  <div className="dropdown-menu" role="menu">
                    <NavLink className="dropdown-item" to="/game/pingpang">
                      PingPang
                    </NavLink>
                    <NavLink className="dropdown-item" to="/game/jetfighter">
                      Jet Fighter
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="javascript:void(0);"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Sandbox <span className="caret" />
                  </a>
                  <div className="dropdown-menu" role="menu">
                    <NavLink className="dropdown-item" to="/sandbox/index">
                      Index
                    </NavLink>
                    <NavLink className="dropdown-item" to="/sandbox/binarytree">
                      binarytree
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/sandbox/randomSelect"
                    >
                      randomSelect
                    </NavLink>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/redux-demo">
                      Redux-demo
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className="nav-link"
                    activeStyle={{ color: "#fff", background: "#777" }}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    d3.js Demo <span className="caret" />
                  </a>
                  <div className="dropdown-menu" role="menu">
                    <a className="dropdown-item" href="./d3.html">
                      Home
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
