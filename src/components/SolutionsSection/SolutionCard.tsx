import React from "react";
import { Solution } from ".";

const SolutionCard = ({ solution }: { solution: Solution }) => {
  const { title, description, range, img } = solution;
  return (
    <div style={{ display: "flex", alignItems: "center", fontSize: 12 }}>
      <img src={img} alt="Imagen de Membresía de Coworking" style={{
        width: "100px",
      }} />
      <div style={{ marginLeft: "20px" }}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{range}</p>
      </div>
    </div>
  );
};

export default SolutionCard;
