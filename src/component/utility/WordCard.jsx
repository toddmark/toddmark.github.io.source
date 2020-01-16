import React from "react";
import Moment from "moment";
import { Tab } from "semantic-ui-react";
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

  componentDidMount() {}

  getDetails() {}

  getTypeOne() {
    const words = this.props.words.words;
    const newList = {};
    words.forEach(item => {
      const year = Moment(item.date).year();
      const month = Moment(item.date).month();
      if (!newList[year]) {
        newList[year] = [];
      }
      if (!newList[year][month]) {
        newList[year][month] = [];
      } else {
        newList[year][month].push(item);
      }
    });
    console.log(newList);

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
    const years = Object.keys(TypeOneList);
    const { word } = this.state;
    const months = TypeOneList[years[0]];
    const panes = [
      { menuItem: "Tab 1", render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
      { menuItem: "Tab 2", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
      { menuItem: "Tab 3", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> }
    ];
    return (
      <div>
        <Tab panes={panes} />
        {months.map((item, index) => {
          const month = `${Number(index) + 1}月 `;
          const days = [];
          months[index] &&
            months[index].forEach(day => {
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
                    ({months[index].length})词
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
