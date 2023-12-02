import React from "react";

export default function Login(props) {
  const { employes } = props;

  return (
    <div style={{ padding: "10px", backgroundColor: "#bbb" }}>
      {employes.map((v) => (
        <div key={v.id} style={{ marginBottom: "10px" }}>
          <div>ID:{v.id}</div>
          <div>Nom:{v.nom}</div>
          <div>Prenom:{v.prenom}</div>
          <div>Age:{v.age}</div>
          <div>Fonction:{v.fonction}</div>
        </div>
      ))}
    </div>
  );
}
