import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <span>
        <Link to="/">login</Link>
      </span>
      <span>
        <Link to="/dashboard"> Products </Link>
      </span>
      <span>
        <Link to="statistiques"> Statistiques </Link>
      </span>
    </div>
  );
};

export default Navbar;
