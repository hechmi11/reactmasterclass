import React from "react";
import { Link } from "react-router-dom";
import { MenuFoldOutlined } from "@ant-design/icons";
import logo from "../assets/img/logo2.jpg";
import { styled } from "styled-components";
import { Button, Dropdown } from "antd";

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
  .brand {
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    img {
      height: 36px;
    }
  }
  .espaceClient {
    display: flex;
    gap: 5px;
  }
  .text {
    font-weight: 600;
    font-size: 23px;
    color: #444;
  }
`;

const Navbar = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Connexion
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Inscription
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Contacter Nous{" "}
        </a>
      ),
    },
  ];
  return (
    <NavbarS>
      <div className="brand">
        <img src={logo} alt="logo rentcar" />

        <span className="text">RentCar</span>
      </div>

      <div className="espaceClient">
        {/* <span>Inscription</span>
        <span>Connexion</span> */}
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
          arrow
        >
          <Button>Espace Client</Button>
        </Dropdown>
      </div>
    </NavbarS>
  );
};

export default Navbar;
