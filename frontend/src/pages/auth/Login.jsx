import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginPageStyle = {
  backgroundColor: "white",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const formStyle = {
  backgroundColor: "#fff",
  boxShadow: "1px 1px 5px rgba(0,0,0,0.5)",
  borderRadius: "6px",
  maxWidth: 310,
  minWidth: 300,
  padding: "10px",
};

const Login = () => (
  <div style={LoginPageStyle}>
    <Form
      name="basic"
      layout="vertical"
      style={formStyle}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Veuillez inserez votre email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Veuillez inserez votre mot de passe!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item style={{ textAlign: "right" }}>
        <Button size={"small"} type="primary" htmlType="submit">
          Se connecter
        </Button>
      </Form.Item>
    </Form>
  </div>
);
export default Login;
