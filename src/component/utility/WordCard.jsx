import React from "react";
import Moment from "moment";
const style = require("./wordCard.less");

class WordCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: {
        title: "",
        text: ""
      }
    };
  }

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

  wordClick(word) {
    this.setState({
      word
    });
    console.log(word);
  }

  render() {
    // const words = this.props.words;
    const TypeOneList = this.getTypeOne();
    const { word } = this.state;
    return (
      <div>
        {Object.keys(TypeOneList)
          .reverse()
          .map(item => {
            const month = `${Number(item) + 1}月 `;
            const days = [];
            TypeOneList[item].forEach(day => {
              days.push(
                <span
                  className={`col-sm-2 ${style.word}`}
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={this.wordClick.bind(this, day)}
                >
                  {" "}
                  {day.text.toLowerCase()}{" "}
                </span>
              );
            });
            return (
              <div className={style.wordPanel}>
                <div className="clearfix">
                  <h4 className="text-primary">
                    {month}
                    <span class="badge badge-light">
                      ({TypeOneList[item].length})词
                    </span>
                  </h4>
                </div>
                <div className="row">{days}</div>
              </div>
            );
          })}
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {word.text.toLowerCase()}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h3>{word.text.toLowerCase()}</h3>
                <p>{word.context}</p>
                <p>{word.trans}</p>
                <p className="text-right">
                  {Moment(word.date).format("YYYY-MM-DD HH:mm:ss")}
                </p>
              </div>
              {/* <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WordCard;
