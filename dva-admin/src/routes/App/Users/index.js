import React from "react";
import { connect } from "dva";
import styles from "./index.css";
import { Table, Icon, Pagination, Popconfirm } from "antd";

const columns = [
  {
    title: "id",
    dataIndex: "id"
  },
  {
    title: "名称",
    dataIndex: "name"
  },
  {
    title: "手机号",
    dataIndex: "phone"
  },
  {
    title: "操作",
    render: (text, { id }) => (
      <span>
        <a
          href="javascript:;"
          onClick={() => {
            console.log("编辑" + id);
          }}
        >
          编辑
        </a>
        <span>&nbsp;|&nbsp;</span>
        <Popconfirm
          title="确定删除?"
          onConfirm={() => {
            console.log("删除" + id);
          }}
        >
          <a href="javascript:;">删除</a>
        </Popconfirm>
      </span>
    )
  }
];

class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { list, current, total, loading, dispatch } = this.props;
    return (
      <div>
        <Table
          columns={columns}
          loading={loading.global}
          rowKey={record => record.id}
          dataSource={this.props.list}
          pagination={false}
        />
        <Pagination
          style={{ "margin": "30px 0" }}
          total={total}
          current={current}
          onChange={page => {
            dispatch({
              type: "users/query",
              payload: { page }
            });
          }}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { list, current, total } = state.users;
  return { loading: state.loading, list, current, total };
}

export default connect(mapStateToProps)(Users);
