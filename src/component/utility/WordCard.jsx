import React from "react";
import Moment from "moment";
import { Tab, Menu } from "semantic-ui-react";
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
      if (newList[year] === undefined) {
        newList[year] = [];
      }
      if (newList[year][month] === undefined) {
        newList[year][month] = [];
      }
      newList[year][month].push(item);
    });
    // console.log(newList);
    return newList;
  }

  wordClick(word) {
    this.setState({
      word
    });
    // console.log(word);
  }

  renderYearTab(months) {
    const panes = [];
    months.map((item, index) => {
      panes.push({
        menuItem: (
          <Menu.Item>
            {index + 1}月<small>&nbsp;({item.length})</small>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            {item.map(item => {
              return (
                <span
                  className={`col-sm-2 ${style.word}`}
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={this.wordClick.bind(this, item)}
                >
                  {" "}
                  {item.text.toLowerCase()}{" "}
                </span>
              );
            })}
          </Tab.Pane>
        )
      });
    });
    return <Tab panes={panes} />;
  }

  render() {
    // const words = this.props.words;
    const TypeOneList = this.getTypeOne();
    console.log(TypeOneList);
    const years = Object.keys(TypeOneList);
    const { word } = this.state;
    return (
      <div>
        {years.reverse().map(item => {
          const result = TypeOneList[item].reduce((acc, cur) => {
            return acc + cur.length;
          }, 0);
          return (
            <div>
              <h4 className="text-primary">
                {item}
                <span class="badge badge-light">({result} words)</span>
              </h4>
              {this.renderYearTab(TypeOneList[item])}
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
