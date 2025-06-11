import { styles } from "../styles";
import { Typewriter } from "react-simple-typewriter";
import Me from "../assets/personal/me.png";
// import { s } from "maath/dist/misc-7d870b3c.esm";

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-10`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#3B82F6]">Luis Velasco</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <Typewriter
              words={["DevOps Engineer", "Backend Developer", "Cloud Solutions Architect", "Full Stack Developer"]}
              loop
              cursor
              cursorStyle="_"
              cursorWidth={2}
              cursorColor="#3B82F6"
              cursorBlinking={true}
              cursorBlinkingTimeout={500}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
        </div>

        {/* Imagen de perfil con borde azul y efecto hover */}
    <img
  src={Me}
  alt="Luis Velasco"
  className="w-56 h-56 rounded-full object-cover object-[center_top] border-4 border-[#3B82F6] transition-transform duration-300 hover:scale-110 hover:shadow-lg"
  style={{
    minWidth: "224px",
    minHeight: "224px",
    boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))",
  }}
/>



      </div>
    </section>
  );
};

export default Hero;
