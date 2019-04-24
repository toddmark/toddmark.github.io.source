import React from "react";

class WordCard extends React.Component {
  componentDidMount() {}

  getDetails() {}

  render() {
    const item = this.props.word;
    return (
      <span style={{ color: "#eee" }} onClick={this.getDetails.bind(this)}>
        {item.text.toLowerCase()}&ensp;
      </span>
    );
  }
}

export default WordCard;
