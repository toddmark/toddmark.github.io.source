import React from "react";

const style = require("./css/demos.less");

export class TrafficLight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLight: "red"
    };
  }
  componentDidMount() {
    this.main();
  }

  sleep(duration) {
    return new Promise(resolve => {
      setTimeout(resolve, duration);
    });
  }

  async changeLights(duration, type) {
    this.setState({
      currentLight: type
    });
    await this.sleep(duration);
  }

  async main() {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      await this.changeLights(1000, "red");
      await this.changeLights(1000, "green");
      await this.changeLights(1000, "yellow");
    }
  }

  render() {
    return (
      <div>
        <div className="clearfix">
          <ul className={style.trafficLight}>
            <li className={this.state.currentLight === "red" && style.red}></li>
            <li
              className={this.state.currentLight === "green" && style.green}
            ></li>
            <li
              className={this.state.currentLight === "yellow" && style.yellow}
            ></li>
          </ul>
        </div>
        <code>src\component\sandbox\demos\trafficLight.js</code>
      </div>
    );
  }
}

export default TrafficLight;
