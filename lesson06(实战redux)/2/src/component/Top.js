import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import { Input, Button } from "antd";

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = { txt: "" };
  }
  render() {
    return (
      <Row>
        <Col span={21}>
          <Input
            placeholder="请输入名称"
            value={this.state.txt}
            onChange={e => {
              this.setState({ txt: e.target.value });
            }}
          />
        </Col>
        <Col span={3}>
          <Button
            type="primary"
            onClick={() => {
              const target = {
                key: String(this.props.data.length),
                text: this.state.txt
              };
              this.props.dispatch({
                type: "ADD",
                data: target
              });
              this.setState({ txt: "" });
            }}
          >
            确定
          </Button>
        </Col>
      </Row>
    );
  }
}

export default connect(state => {
  return { data: state };
})(Top);
