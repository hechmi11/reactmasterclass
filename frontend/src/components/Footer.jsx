import React from "react";

import { Col, Row } from "antd";

const footerStyle = {
  backgroundColor: "#444",
  color: "white",
  padding: "20px",
};

const Footer = () => {
  return (
    <>
      <div style={footerStyle}>
        <Row gutter={24}>
          {[1, 2, 3, 4].map((item, i) => (
            <Col
              key={i}
              style={{
                color: "white",
                padding: "10px",
                display: "flex",
                justifyContent: "center",
              }}
              xs={12}
              xl={6}
            >
              <div style={{ padding: "5px" }}>
                <h4 style={{ marginBottom: "10px" }}>Membre services</h4>
                <a
                  href=""
                  style={{
                    display: "block",
                    color: "white",
                    marginBottom: "5px",
                  }}
                >
                  Voir profil
                </a>

                <a
                  href=""
                  style={{
                    display: "block",
                    color: "white",
                    marginBottom: "5px",
                  }}
                >
                  Voir profil
                </a>
                <a
                  href=""
                  style={{
                    display: "block",
                    color: "white",
                    marginBottom: "5px",
                  }}
                >
                  Voir profil
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </div>

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
