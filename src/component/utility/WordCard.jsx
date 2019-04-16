import React from "react";

class WordCard extends React.Component {
  componentDidMount() {}

  getDetails() {
    fetch("https://api.shanbay.com/bdc/search/?word=dynamic", {
      mode: "no-cors"
    });
    console.log(this.props.word.text.toLowerCase());
  }

  render() {
    const item = this.props.word;
    return (
      <span style={{ color: "#eee" }} onClick={this.getDetails.bind(this)}>
        {item.text.toLowerCase()}&emsp;
      </span>
    );
  }
}

export default WordCard;
