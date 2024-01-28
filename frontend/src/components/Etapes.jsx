import React from "react";
import { Steps } from "antd";

const Etapes = (props) => {
  const { etape } = props;
  const etapes = [
    {
      title: "Choix Date",
      description: "1ére étape",
    },
    {
      title: "Choix Auto",
      description: "2éme étape",
    },
    {
      title: "Contart",
      description: "3éme étape",
    },
  ];
  return <Steps current={etape} items={etapes} />;
};
export default Etapes;
