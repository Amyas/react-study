import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ backgroundColor: "red" }}>
        <input
          type="text"
          ref="input"
          onChange={e => {
            this.props.dispatch({
              type: "A",
              text: e.target.value
            });
          }}
        />
        <button
          onClick={() => {
            if (!this.refs.input.value) return alert("请输入姓名");
            this.props.dispatch({
              type: "ADD",
              text: this.refs.input.value
            });
            this.props.dispatch({
              type: "B"
            });
            this.refs.input.value = "";
          }}
        >
          点击dispatch
        </button>
      </div>
    );
  }
}
export default connect()(App);