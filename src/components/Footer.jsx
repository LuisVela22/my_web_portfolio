import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaGithub, FaDocker } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="flex flex-col space-y-10 justify-center m-10">
            <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
                <a className="hover:text-gray-900" href="/">Home</a>
                <a className="hover:text-gray-900" href="#about">About</a>
                <a className="hover:text-gray-900" href="#work">Services</a>
                <a className="hover:text-gray-900" href="#contact">Contact</a>
            </nav>

            <div className="flex justify-center space-x-5 text-2xl">
                <a href="https://www.facebook.com/Velasco.7?mibextid=ZbWKwL" target="_blank"
                    rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <FaFacebook />
                </a>
                <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-900">
                    <FaLinkedin />
                </a>
                <a href="https://instagram.com" className="text-pink-500 hover:text-pink-700">
                    <FaInstagram />
                </a>
                <a href="https://twitter.com" className="text-sky-500 hover:text-sky-700">
                    <FaTwitter />
                </a>
                <a href="https://github.com/luisvela22"
                    target="_blank"
                    rel="noopener noreferrer" className="text-gray-800 hover:text-black">
                    <FaGithub />
                </a>
                <a href="https://hub.docker.com/u/tu-usuario" target="_blank"
                    rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                    <FaDocker />
                </a>
            </div>

            <p className="text-center text-gray-700 font-medium">
                &copy; 2025 LuisVelasco. Todos los derechos reservados.
            </p>
        </footer>
    );
};

export default Footer;
