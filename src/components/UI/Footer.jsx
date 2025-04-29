import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <><footer className="container text-center mt-4">
        <hr className="border border-2 border-dark rounded" />
        <div className="row">
          <div className="col">
            <h2 className="text-secondary-emphasis">𝓕𝓸𝓵𝓵𝓸𝔀 𝓶𝓮 :</h2>
          </div>
          <div className="col d-flex gap-3 justify-content-center">
            <a href="https://www.instagram.com/ankitpandit8621?igsh=dHdwaGRlaDRwbGJk" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com/in/aojha8019" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <CiLinkedin size={30} />
            </a>
            <a href="https://github.com/AnkitOjha2026" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </footer>
      
        </>
    );
};

export default Footer;
