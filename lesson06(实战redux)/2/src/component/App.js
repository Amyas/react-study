import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Row, Col } from "antd";

import Top from "./Top";
import Bottom from "./Bottom";

class App extends React.Component {
  render() {
    return (
      <div style={{ width: "478px", margin: "0 auto" }}>
        <Top />
        <Bottom />
      </div>
    );
  }
}

export default connect(state => {
  return { data: state };
})(App);
