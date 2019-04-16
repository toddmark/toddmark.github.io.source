import React from "react";

class WordCard extends React.Component {
  render() {
    const item = this.props.word;
    return <span style={{ color: "#eee" }}>{item.text}&emsp;</span>;
  }
}

export default WordCard;
