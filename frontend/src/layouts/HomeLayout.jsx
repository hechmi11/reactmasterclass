import React, { useState } from "react";
import { MenuFoldOutlined } from "@ant-design/icons";

import { Layout, Menu, Button, theme, Tooltip } from "antd";

import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const { Header, Sider, Content } = Layout;

const HomeLayout = () => {
  return (
    <Layout style={{ height: "100vh", paddingTop: "4.1rem" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </Layout>
  );
};
export default HomeLayout;
