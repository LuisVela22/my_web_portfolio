import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/technologies";
import { styles } from "../styles";

const Tech = () => {
  return (

    <div className="flex flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div key={tech.name} className="flex flex-col items-center w-28 hover:scale-105 transition-transform duration-300">
          <div className="w-28 h-28">
            <CircularProgressbar
              value={tech.level}
              text={`${tech.level}%`}
              styles={buildStyles({
                pathColor: "#3b82f6", // azul tailwind
                textColor: "#fff",
                trailColor: "#1e293b",
                textSize: "22px", // Ajustar el tamaño del texto
                pathTransitionDuration: 0.5, // Añadir animación suave
              })}
            />
          </div>
          <div className="mt-2 flex flex-col items-center">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-8 h-8 mb-1"
              style={{ filter: 'invert(1)' }} // Invierte el color del ícono
            />


            <p className="text-white text-sm text-center">{tech.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
