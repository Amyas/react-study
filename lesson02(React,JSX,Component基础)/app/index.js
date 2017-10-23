import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: ["java", "c++", "javascript", "node", "php"]
    };
  }
  render() {
    let { lists: arr } = this.state;
    let props = {
      className: "main",
      style: {
        width: "200px",
        height: "200px",
        backgroundColor: "red"
      }
    };
    return (
      <div>
        <div {...props} />
        <ul>
          {arr.map((result, index) => {
            return (
              <li key={index} style={{ color: "red" }}>
                {result}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
