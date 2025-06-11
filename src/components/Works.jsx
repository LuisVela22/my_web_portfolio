import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      {/* Títulos */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      {/* Descripción */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of the projects I've worked on recently. Click to view the live demo or source code.
        </motion.p>
      </div>

      {/* Línea de tiempo refinada */}
      <div className="mt-14 relative border-l-[3px] border-[#3B82F6] pl-12 space-y-14">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            variants={fadeIn("up", "spring", index * 0.3, 0.75)}
            className="relative group"
          >
            {/* Punto estilizado */}
            <div className="absolute -left-[23px] top-4 w-5 h-5 bg-[#3B82F6] rounded-full border-[3px] border-white shadow-md" />

            {/* Contenido */}
            <div className="ml-2 flex flex-col gap-3">
              <h3 className="text-white text-[20px] font-bold leading-tight pl-1">{project.name}</h3>
              <p className="text-gray-300 text-[14px] leading-relaxed pl-1">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pl-1">
                {project.tags.map((tag) => (
                  <span
                    key={`${project.name}-${tag.name}`}
                    className={`text-xs font-medium ${tag.color}`}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>

              {/* Imagen y botones */}
              <div className="relative mt-3 rounded-xl overflow-hidden group max-w-md">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-52 object-cover object-center rounded-xl shadow-xl"
                  loading="lazy"
                />
              </div>

              {/* Botones debajo de la imagen */}
              <div className="flex gap-4 mt-2 pl-1">
                {project.source_code_link && (
                  <button
                    onClick={() => window.open(project.source_code_link, "_blank")}
                    className="flex items-center gap-2 bg-[#3B82F6] text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600 transition shadow"
                  >
                    <img src={github} alt="GitHub" className="w-5 h-5" />
                    View Code
                  </button>
                )}
                {project.live_demo_link && (
                  <button
                    onClick={() => window.open(project.live_demo_link, "_blank")}
                    className="flex items-center gap-2 bg-[#3B82F6] text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600 transition shadow"
                  >
                    <img src={github} alt="Live Demo" className="w-5 h-5" />
                    Live Demo
                  </button>
                  
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
