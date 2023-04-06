import React from "react";
import "./SolutionSection.css";
import SolutionCard from "./SolutionCard";
import HotDesks from './Hot_Desks.png'

export interface Solution {
  title: string;
  description: string;
  range: string;
  img: string;
}

interface SolutionCardProps {
  solution: Solution;
}

const SolutionSection: React.FC<SolutionCardProps> = () => {
  const solutionArray: Solution[] = [
    {
      title: "Membresía de Coworking",
      description: "Hot desks, salas, cabinas telefónicas y más",
      range: "Más de 1",
      img: HotDesks
    },
    {
      title: "Membresía de Coworking",
      description: "Hot desks, salas, cabinas telefónicas y más",
      range: "Más de 1",
      img: HotDesks
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
