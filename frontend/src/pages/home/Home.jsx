import React from "react";
import { styled } from "styled-components";

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
    background-color: rgba(255, 255, 2555, 0.85);
    width: 370px;
    height: 350px;
    margin-left: 15px;
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
        <div className="formClass">test</div>
      </HeroSectionS>
      <ServiceSectionS>hero service</ServiceSectionS>
    </div>
  );
};

export default Home;
