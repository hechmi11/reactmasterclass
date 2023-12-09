import React from "react";

const heroStyle = {
  backgroundImage:
    "url(https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg)",

  backgroundSize: "cover",
  backgroundRepeat: "no-reapeat",
  backgroundPosition: "center",
  height: "650px",
};
const servicesStyle = {};

const Home = () => {
  return (
    <div>
      <section style={heroStyle}></section>

      <section style={servicesStyle}>hero service </section>
    </div>
  );
};

export default Home;
