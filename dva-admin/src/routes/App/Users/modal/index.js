import React from "react";
import { Form, Modal, Input } from "antd";
const FormItem = Form.Item;

const modal = ({
  modalProps,
  form: { getFieldDecorator, validateFields, getFieldsValue }
}) => {
  const { onOk, item } = modalProps;
  const handleOk = () => {
    validateFields((error, values) => {
      if (error) {
        return;
      }
      if (item.id) {
        values["id"] = item.id;
      }
      onOk(values);
    });
  };
  const modalOpts = {
    ...modalProps,
    onOk: handleOk
  };
  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">
        <FormItem label="姓名" hasFeedback>
          {getFieldDecorator("name", {
            initialValue: item.name,
            rules: [
              {
                required: true,
                message: "请输入姓名"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label="手机" hasFeedback>
          {getFieldDecorator("phone", {
            initialValue: item.phone,
            rules: [
              {
                required: true,
                message: "请输入手机号码!"
              },
              {
                pattern: /^1[34578]\d{9}$/,
                message: "输入的不是有效的手机号!"
              }
            ]
          })(<Input />)}
        </FormItem>
      </Form>
    </Modal>
  );
};

export default Form.create()(modal);
