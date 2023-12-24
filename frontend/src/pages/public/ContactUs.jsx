import React from "react";
import styled from "styled-components";
import { Button, Layout, Grid, Row, Col } from "antd";
import { motion } from "framer-motion";
// import { size } from "../../helpers/uiHelpers";
// import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
// import { Line } from "@ant-design/charts";

// import "leaflet/dist/leaflet.css";
const { useBreakpoint } = Grid;

const ContactUSS = styled.div`
  background-color: #838383;
  padding: 10px;

  .leaflet_col {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;

    .leaflet_container {
      position: relative !important;
      overflow: hidden;
      margin: 10px;
    }
    .map-container {
      width: 1370px;
      height: 770px;
      z-index: 1;
      @media (max-width: 600px) {
        height: 350px;
        width: 350px;
      }
    }
    .chart-container {
      width: 670px;

      @media (max-width: 600px) {
        width: 350px;
        height: 350px;
        background-color: #dfeedf;
        margin-bottom: 30px;
      }
    }
  }
`;

const ContactUs = () => {
  const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 },
  ];

  const config = {
    data,
    xField: "year",
    yField: "value",
    point: {
      size: 6,
      shape: "diamond",
    },
  };

  return (
    <ContactUSS>
      <Row gutter={[16, 16]}>
        <Col xs={24} xl={12} className="leaflet_col">
          <div className="leaflet_container">
            <MapContainer
              className="map-container"
              center={[36.80268298473545, 10.11230283818518]}
              zoom={13}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[36.80268298473545, 10.11230283818518]}>
                <Popup>
                  MASTERCLASS
                  <br />
                  TNDEVART
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </Col>
        <Col className="leaflet_col" xs={24} xl={12}>
          <div className="chart-container">
            <Line {...config} />
          </div>
        </Col>
      </Row>
    </ContactUSS>
  );
};

export default ContactUs;
