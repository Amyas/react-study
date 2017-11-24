import React from "react";
import { connect } from "react-redux";

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ backgroundColor: "yellow", minHeight: "200px" }}>
        <h1>总数：{this.props.state.length}</h1>
        <ul>
          {this.props.state.map((e, i) => (
            <li key={i}>
              {i}-{e.text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button
                onClick={() => {
                  this.props.dispatch({
                    type: "CHANGE",
                    index: i,
                    text: this.props.text
                  });
                }}
              >
                变更
              </button>
              <button
                onClick={() => {
                  this.props.dispatch({
                    type: "DEL",
                    index: i
                  });
                }}
              >
                删除
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(state => {
  return { state: state.reducer1, text: state.reducer2.text };
})(App2);
