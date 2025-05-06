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
            Hi, I'm <span className="text-[#915EFF]">Luis Velasco</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <Typewriter
              words={["Backend Developer", "DevOps Engineer", "Cloud Solutions Architect", "Full Stack Developer"]}
              loop
              cursor
              cursorStyle="__"
              cursorColor="#915EFF"
              cursorBlinking={true}
              cursorBlinkingTimeout={500}
              typeSpeed={70}
              deleteSpeed={100}
              delaySpeed={1500}
            />
          </p>
        </div>

        {/* Imagen de perfil con borde azul y efecto hover */}
        <img
          src={Me}
          alt="Luis Velasco"
          className={styles.profileImage}
        />
      </div>
    </section>
  );
};

export default Hero;
