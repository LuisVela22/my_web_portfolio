import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const studies = [
  {
    degree: "Ingeniería en Sistemas Computacionales",
    institution: "Instituto Politécnico Nacional",
    period: "Agosto 2022 - Actualidad",
    icon: <FaUniversity size={30} />,
    color: "from-purple-500 to-pink-500",
  },
  {
    degree: "CECyT 7 - Cuahutémoc",
    institution: "Instituto Politécnico Nacional",
    period: "Agosto 2019 - Junio 2022",
    icon: <FaGraduationCap size={30} />,
    color: "from-purple-400 to-blue-500",
  },
];

const StudyCard = ({ study, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className={`bg-gradient-to-br ${study.color} p-[1px] rounded-2xl w-full sm:w-[350px] shadow-xl`}
  >
    <div className="bg-[#1d1d2e] rounded-2xl py-6 px-5 h-full glassmorphism text-white">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-white text-black p-2 rounded-full">{study.icon}</div>
        <h3 className="text-xl font-bold">{study.degree}</h3>
      </div>
      <p className="text-secondary text-[16px]">{study.institution}</p>
      <p className="text-sm text-gray-400 mt-2">{study.period}</p>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Formación Académica</p>
        <h2 className={styles.sectionHeadText}>Estudios.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        He recorrido un camino de formación técnica y profesional que me ha permitido
        desarrollar habilidades en desarrollo web, programación orientada a objetos
        y trabajo en equipo.
      </motion.p>

      <div className="mt-12 flex flex-wrap gap-10 justify-center">
        {studies.map((study, index) => (
          <StudyCard key={index} study={study} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
