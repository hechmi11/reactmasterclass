import React from "react";
import { Link } from "react-router-dom";
import { MenuFoldOutlined } from "@ant-design/icons";
const navbarStyle = {
  backgroundColor: "lightgray",
  padding: "5px 10px",
  height: "40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const Navbar = () => {
  return (
    <div style={navbarStyle}>
      <div style={{ display: "flex", gap: "5px" }}>
        <span>
          <MenuFoldOutlined />
        </span>
        <span style={{ fontWeight: "700" }}>RentCar</span>
      </div>

      <div style={{ display: "flex", gap: "5px" }}>
        <span>Inscription</span>
        <span>Connexion</span>
      </div>
    </div>
  );
};

export default Navbar;
