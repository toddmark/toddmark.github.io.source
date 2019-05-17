import React from "react";
import Moment from "moment";
import "./wordCard.less";

class WordCard extends React.Component {
  componentDidMount() {
    this.getTypeOne();
  }

  getDetails() {}

  getTypeOne() {
    const words = this.props.words.words;
    const newList = {};
    words.forEach(item => {
      const month = Moment(item.date).month();
      if (!newList[month]) {
        newList[month] = [];
      } else {
        newList[month].push(item);
      }
    });
    // newList[]
    return newList;
  }

  render() {
    // const words = this.props.words;
    const TypeOneList = this.getTypeOne();
    return (
      <div style={{ color: "#eee" }}>
        {Object.keys(TypeOneList)
          .reverse()
          .map(item => {
            const month = `${Number(item) + 1}月`;
            const days = [];
            TypeOneList[item].forEach(day => {
              days.push(
                <span className="col-sm-2 word">
                  {" "}
                  {day.text.toLowerCase()}{" "}
                </span>
              );
            });
            return (
              <div>
                <h4>{month}</h4>
                <div className="row">{days}</div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default WordCard;
