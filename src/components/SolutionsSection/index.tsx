import React from "react";
import "./SolutionSection.css";
import SolutionCard from "./SolutionCard";
import HotDesks from "./Hot_Desks.png";

export interface Solution {
  title: string;
  description: string;
  range: string;
  img: string;
}

interface SolutionCardProps {
  solution: Solution;
}

const SolutionSection: React.FC = () => {
  const solutionArray: Solution[] = [
    {
      title: "Membresía de coworking",
      description: "Hot desks, salas, cabinas telefónicas y más",
      range: "Más de 1",
      img: HotDesks,
    },
    {
      title: "Oficina Privada",
      description: "Oficinas listas con amenidades compartidas",
      range: "1-20+",
      img: "https://ctfassets.imgix.net/vh7r69kgcki3/UXP1XHGUaziQtFAGuMCZx/e3b5a6c56456da4f290c18426eb84c1a/Private_Office_274x274.png?auto=format%20compress&fit=crop&q=50&w=200&h=200",
    },
    {
      title: "Executive Office",
      description: "Oficinas de primer nivel con amenidades privadas",
      range: "20-100+",
      img: "https://ctfassets.imgix.net/vh7r69kgcki3/3UdjOaiPRb734SnJ8ApLUk/b9455393017cfe8916d722ea17b639e9/Office_Suite_1440x1440.png?auto=format%20compress&fit=crop&q=50&w=100&h=100",
    },
    {
      title: "Sala de reuniones",
      description: "Salas privadas que se pueden reservar por hora",
      range: "1-20",
      img: "https://ctfassets.imgix.net/vh7r69kgcki3/35qhYMr0wIJvd2o5MAuSHd/c45139bad5decb1cf980735f9f632a05/Meeting_Small_274x274.png?auto=format%20compress&fit=crop&q=50&w=200&h=200",
    },
  ];
  return (
    <div className="solution-card">
      <div className="solutions">
        <h2>¿Qué estás buscando?</h2>
        <button>Ver todas las soluciones</button>
      </div>
      <div className="solution-card__container">
        {solutionArray.map((solution) => (
          <SolutionCard solution={solution} />
        ))}
      </div>
    </div>
  );
};

export default SolutionSection;
