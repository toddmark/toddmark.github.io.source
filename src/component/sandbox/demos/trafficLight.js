import React from "react";

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
    return <div>{this.state.currentLight}</div>;
  }
}

export default TrafficLight;
