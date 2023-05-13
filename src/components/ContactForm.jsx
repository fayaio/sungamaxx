import React from 'react';
import 'antd/dist/reset.css';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
import { useState } from 'react';
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const ContactForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        ['.com', '.org', '.net'].map((domain) => `${value}${domain}`)
      );
    }
  };

  return (
    <Form
      className="w-[100%] pt-12 !mr-10 flex flex-col   place-items-start  items-stretch "
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item
        className=""
        name="Name"
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
            whitespace: true,
          },
        ]}
      >
        <Input className=" text-lg p-4  font-normal" placeholder="Your Name" />
      </Form.Item>

      <Form.Item
        name="Position"
        rules={[
          {
            required: true,
            message: 'Please input your Position!',
            whitespace: true,
          },
        ]}
      >
        <Input
          className=" text-lg p-4  font-normal"
          placeholder="Your Position"
        />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input
          className=" text-lg p-4  font-normal"
          placeholder="Your E-mail Address"
        />
      </Form.Item>

      <Form.Item
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input your Phone Number!',
          },
        ]}
      >
        <Input
          style={{
            width: '100%',
          }}
          className=" text-lg p-4  font-normal"
          placeholder="Your Phone Number "
        />
      </Form.Item>

      <Form.Item
        name="Requirement"
        rules={[
          {
            required: true,
            message: 'Please input requirement',
          },
        ]}
      >
        <Input.TextArea
          showCount
          maxLength={1000}
          className=" text-lg p-4  font-normal"
          placeholder="Your Requirements"
        />
      </Form.Item>

      <Form.Item
        {...tailFormItemLayout}
        className=" mt-4 flex flex-row  place-items-start  "
      >
        <Button
          htmlType="submit"
          className=" bg-lightPurple p-2 h-10 w-20 text-whitee font-Quat hover:bg-darkPurple hover:text-white "
        >
          Send
        </Button>
      </Form.Item>
    </Form>
  );
};
export default ContactForm;
