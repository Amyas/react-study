import React from "react";
import { connect } from "dva";
import styles from "./index.css";
import { Table, Icon, Pagination, Popconfirm, Button } from "antd";
import Modal from "./modal";

const Users = ({ loading, dispatch, users }) => {
  const { list, current, total, modalVisible, modalType, currentItem } = users;

  const columns = [
    {
      title: "ID",
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
      render: (text, record) => (
        <span>
          <a
            href="javascript:;"
            onClick={() => {
              dispatch({
                type: "users/changeModalVisible",
                payload: {
                  modalType: "update",
                  currentItem: record,
                  modalVisible: true
                }
              });
            }}
          >
            编辑
          </a>
          <span>&nbsp;|&nbsp;</span>
          <Popconfirm
            title="确定删除?"
            onConfirm={() => {
              dispatch({
                type: "users/delete",
                payload: { id: record.id }
              });
            }}
          >
            <a href="javascript:;">删除</a>
          </Popconfirm>
        </span>
      )
    }
  ];
  const modalProps = {
    item: modalType === "create" ? {} : currentItem,
    title: modalType === "create" ? "创建用户" : "编辑用户",
    wrapClassName: "vertical-center-modal",
    visible: modalVisible,
    onOk: data => {
      dispatch({
        type: "users/create",
        payload: data
      });
    },
    onCancel: () => {
      dispatch({
        type: "users/changeModalVisible",
        payload: {
          modalVisible: false
        }
      });
    }
  };

  return (
    <div>
      <Button
        onClick={() => {
          dispatch({
            type: "users/changeModalVisible",
            payload: {
              modalType: "create",
              modalVisible: true
            }
          });
        }}
      >
        创建用户
      </Button>
      {modalVisible && <Modal modalProps={modalProps} />}
      <Table
        columns={columns}
        loading={loading.global}
        rowKey={record => record.id}
        dataSource={list}
        pagination={false}
      />
      <Pagination
        style={{ margin: "30px 0" }}
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
};

function mapStateToProps(state) {
  return { loading: state.loading, users: state.users };
}

export default connect(mapStateToProps)(Users);
