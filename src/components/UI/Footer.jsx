import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="container text-center">
                 <hr className="border border-2 border-dark rounded" />
                <hr className="border-white" />
                <div className="row">
                    <div className="col">
                       <h2 className="text-secondary-emphasis">𝓕𝓸𝓵𝓵𝓸𝔀 𝓶𝓮 :</h2>
                    </div>
                    <div className="col d-flex gap-3 ">
                       <h1><a href=""><FaInstagram /></a> </h1>
                       <h1><a href=""><CiLinkedin /></a> </h1>
                       <h1><a href=""><FaGithub /></a> </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
