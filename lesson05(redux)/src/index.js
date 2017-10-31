import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

function counter(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onAdd = this.onAdd.bind(this);
    this.onMinus = this.onMinus.bind(this);
    this.state = {};
  }
  componentDidMount() {
    this.setState({
      count: store.getState()
    });
    store.subscribe(() => {
      this.setState({
        count: store.getState()
      });
    });
  }
  onAdd() {
    store.dispatch({
      type: "ADD"
    });
  }
  onMinus() {
    store.dispatch({
      type: "MINUS"
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onAdd}>加</button>
        <button onClick={this.onMinus}>减</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
