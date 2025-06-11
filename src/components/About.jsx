import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const studies = [
  {
    title: "B.S. in Computer Systems",
    institution: "Instituto Politécnico Nacional",
    period: "2022 - Present",
    icon: <FaUniversity size={30} />,
  },
  {
    title: "High School - CECyT 7",
    institution: "Instituto Politécnico Nacional",
    period: "2019 - 2022",
    icon: <FaGraduationCap size={30} />,
  },
];

const StudyPanel = ({ study, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.8)}
    className="group w-full sm:w-[360px] h-[230px] perspective"
  >
    <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotateY-3 group-hover:-rotateX-3">
      {/* Layer 1: Base Panel */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl p-6 shadow-[0_0_40px_#0ff2_5%] border border-cyan-500/20 z-10 transform backface-hidden">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-cyan-500/10 border border-cyan-500 rounded-full">
            {study.icon}
          </div>
          <h3 className="text-white font-bold text-lg">{study.title}</h3>
        </div>
        <p className="text-cyan-100">{study.institution}</p>
        <p className="text-gray-400 text-sm mt-2">{study.period}</p>
      </div>

      {/* Glowing Border Effect */}
      <div className="absolute inset-0 rounded-2xl border border-cyan-400 blur-[2px] opacity-10 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none z-0" />
    </div>
  </motion.div>
);

const About = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Academic background</p>
      <h2 className={styles.sectionHeadText}>Education</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      My academic background reflects a strong foundation in technology and systems engineering, fostering analytical thinking, collaboration, and creative problem-solving.
    </motion.p>

    <div className="mt-12 flex flex-wrap gap-10 justify-center">
      {studies.map((study, index) => (
        <StudyPanel key={index} study={study} index={index} />
      ))}
    </div>
  </>
);

export default SectionWrapper(About, "about");
