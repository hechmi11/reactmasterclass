import React, { useState } from "react";
import { Button, Flex, Form, Input } from "antd";
import { login, setUserConnected } from "../../../featuers/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
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

const LoginMember = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (values) => {
    setLoading(true);
    dispatch(login(values))
      .then((res) => {
        const { id: _id, name, email, token } = res.payload.user;
        const { message } = res.payload;
        console.log(message);
        console.log(token);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(res.payload.user));
        setLoading(false);
        dispatch(setUserConnected(res.payload.user));
        navigate("/dashboard-member");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    handleLogin(values);
  };

  return (
    <div style={LoginPageStyle}>
      <Form
        name="basic"
        layout="vertical"
        style={formStyle}
        onFinish={onFinish}
        autoComplete="off"
      >
        <div style={{ padding: "10px 0" }}>
          <h3 style={{ textAlign: "center" }}>Connexion Membre</h3>
        </div>

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

        <Form.Item>
          <Flex justify="space-between" align="center">
            <div>
              <Link to="/register-member" style={{ fontSize: "11px" }}>
                Lien pour s'inscrire
              </Link>
            </div>

            <Button
              size={"small"}
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              Se connecter
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginMember;
