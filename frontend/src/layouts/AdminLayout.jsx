import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UserSwitchOutlined,
  BarcodeOutlined,
  BarChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { Layout, Menu, Button, theme, Tooltip } from "antd";

import { Link, Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      key: "1",
      icon: <BarcodeOutlined />,
      label: <Link to="/dashboard"> Products </Link>,
    },
    {
      key: "2",
      icon: <BarChartOutlined />,
      label: <Link to="statistiques"> Statistiques </Link>,
    },
    {
      key: "3",
      icon: <UserSwitchOutlined />,
      label: "Manage users",
    },
  ];

  return (
    <Layout style={{ height: "100vh", padding: "0 0px" }}>
      <Sider
        style={{ backgroundColor: "white" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className="demo-logo-vertical"
          style={{
            background: "white",
            padding: "19px",
            display: "flex",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <Tooltip placement="rightBottom" title={"Administration"}>
            <SettingOutlined />
          </Tooltip>
          {collapsed ? "" : <span>Administration</span>}
        </div>

        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
