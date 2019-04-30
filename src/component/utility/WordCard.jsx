import React from "react";
import Moment from "moment";

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
    console.log(Object.keys(newList));
    return newList;
  }

  render() {
    // const words = this.props.words;
    const TypeOneList = this.getTypeOne();
    // console.log(Moment(item.date).month(), Moment(item.date).week(), Moment(item.date).format("YYYY年M月DD日"));
    return (
      <div style={{ color: "#eee" }}>
        {Object.keys(TypeOneList).map(item => {
          const month = `${Number(item) + 1}月`;
          console.log(TypeOneList[item]);
          const days = [];
          TypeOneList[item].forEach(day => {
            days.push(<span>{day}</span>);
          });
          console.log(days);
          return (
            <div>
              <p>{month}</p>
              {/* {days} */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default WordCard;
