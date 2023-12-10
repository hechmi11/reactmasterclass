import React from "react";
import { Link } from "react-router-dom";
import { MenuFoldOutlined } from "@ant-design/icons";

import { styled } from "styled-components";

const NavbarS = styled.div`
  background-color: white;
  padding: 5px 10px;
  height: 4rem;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 99;
  justify-content: space-between;
  align-items: center;
`;

const Navbar = () => {
  return (
    <NavbarS>
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
    </NavbarS>
  );
};

export default Navbar;
