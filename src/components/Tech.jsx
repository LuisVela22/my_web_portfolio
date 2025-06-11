import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/technologies";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const getExperienceLevel = (level) => {
  if (level > 75) return "Expert";
  if (level > 50) return "Advanced";
  if (level > 25) return "Intermediate";
  return "Beginner";
};

const getLevelColor = (level) => {
  if (level > 75) return "bg-blue-500";
  if (level > 50) return "bg-green-500";
  if (level > 25) return "bg-yellow-500";
  return "bg-red-500";
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Skills & Tools</p>
        <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Here are the technologies I use regularly in my projects. Each one is a key part of my frontend and backend workflow, from programming languages and frameworks to tools and platforms.
      </motion.p>

      {/* Barras horizontales de nivel */}
      <div className="mt-16 flex flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center w-40 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-10 h-10 mb-2"
              style={{ filter: "invert(1)" }}
            />
            <p className="text-white text-sm text-center mb-1">{tech.name}</p>
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
              <div
                style={{ width: `${tech.level}%` }}
                className={`h-full ${getLevelColor(tech.level)} rounded-full`}
              ></div>
            </div>
            <p className="text-xs text-center mt-1 text-gray-400">
              {getExperienceLevel(tech.level)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
