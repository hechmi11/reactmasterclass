import React from "react";

const footerStyle = {
  backgroundColor: "#444",
  color: "white",
  padding: "20px",
};

const Footer = () => {
  return (
    <>
      <div style={footerStyle}>footer systeme de liste</div>

      <div
        style={{
          backgroundColor: "#333",
          color: "white",
          padding: "5px",
          display: "flex",
          justifyContent: "center",
          fontSize: "12px",
        }}
      >
        &copy; 2023 Powered by Masterclass
      </div>
    </>
  );
};

export default Footer;
