import { Calendar } from "antd/lib";
import React from "react";
import { styled } from "styled-components";
import Calendrier from "./Calendrier";

const HeroSectionS = styled.section`
  background-image: url(https://ik.imagekit.io/z90usd6mcrv7/https://www.tunisia-rent-car.com/images/clio.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 650px;
  display: flex;
  justify-content: start;
  align-items: center;
  .formClass {
    background-color: rgba(255, 255, 2555, 0.7);
    width: 420px;
    height: 400px;
    margin-left: 150px;
    margin-bottom: 100px;
    border-radius: 9px;
  }
`;

const ServiceSectionS = styled.section`
  background-color: white;
`;

const Home = () => {
  return (
    <div>
      <HeroSectionS>
        <div className="formClass">
          <div
            style={{
              paddingLeft: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            {" "}
            <h3>Location De Voiture en Tunisie </h3>
          </div>
          <div style={{ paddingBottom: "100px", paddingLeft: "30px" }}>
            <h5>Agence de Prise en Charge</h5>
          </div>
          <div style={{ paddingBottom: "100px", paddingLeft: "30px" }}>
            <h5> Date de Retrait</h5>
          </div>
          <div style={{ paddingBottom: "100px", paddingLeft: "30px" }}>
            {" "}
            <h5>Date de Retour</h5>
          </div>
        </div>
      </HeroSectionS>
      <ServiceSectionS>hero service</ServiceSectionS>
    </div>
  );
};

export default Home;
