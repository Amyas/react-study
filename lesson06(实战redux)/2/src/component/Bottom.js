import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import { Table, Input, Popconfirm } from "antd";

const deep = data => {
  var newData = [];
  for (var i = 0; i < data.length; i++) {
    newData[i] = Object.assign({}, data[i]);
  }
  return newData;
};

class Bottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: deep(this.props.data) };
    this.columns = [
      {
        title: "text",
        dataIndex: "text",
        render: (text, record) => {
          const { editable } = record;
          return (
            <div>
              {editable ? (
                <Input
                  value={text}
                  onChange={e => {
                    const newData = [...this.state.data];
                    const target = newData.filter(
                      item => item.key == record.key
                    )[0];
                    target.text = e.target.value;
                    this.setState({
                      data: newData
                    });
                  }}
                />
              ) : (
                text
              )}
            </div>
          );
        }
      },
      {
        title: "operation",
        dataIndex: "operation",
        render: (text, record) => {
          const { editable } = record;
          return (
            <div>
              {editable ? (
                <span>
                  <a onClick={() => this.save(record.key)}>保存</a>
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  <Popconfirm
                    title="确定取消?"
                    onConfirm={() => this.cancel(record.key)}
                  >
                    <a>取消</a>
                  </Popconfirm>
                </span>
              ) : (
                <div>
                  <a onClick={() => this.edit(record.key)}>编辑</a>
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  <Popconfirm
                    title="确定取消?"
                    onConfirm={() => this.del(record.key)}
                  >
                    <a>删除</a>
                  </Popconfirm>
                </div>
              )}
            </div>
          );
        }
      }
    ];
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: deep(nextProps.data)
    });
  }
  del(key) {
    const newData = deep(this.state.data).filter(item => item.key != key);
    this.props.dispatch({
      type: "UPDATE",
      data: newData
    });
  }
  edit(key) {
    const newData = deep(this.state.data);
    const target = newData.filter(item => key == item.key)[0];
    target.editable = true;
    this.setState({
      data: newData
    });
  }
  save(key) {
    const newData = deep(this.state.data);
    const target = newData.filter(item => item.key == key)[0];
    delete target.editable;
    this.props.dispatch({
      type: "UPDATE",
      data: newData
    });
  }
  cancel(key) {
    const newData = deep(this.state.data);
    const target = newData.filter(item => item.key == key)[0];
    target.text = deep(this.props.data).filter(item => item.key == key)[0].text;
    delete target.editable;
    this.setState({
      data: newData
    });
  }
  render() {
    return (
      <Row>
        <Col span={24}>
          <Table bordered dataSource={this.state.data} columns={this.columns} />
        </Col>
      </Row>
    );
  }
}

export default connect(state => {
  return { data: state };
})(Bottom);
