import React from "react";
import Button from "../../../../Shared/Navbar/Components/Button";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import HeroCss from "./Hero.module.css";
const Hero = () => {
  return (
    <div className="text-center h-[80vh] flex flex-col justify-center mx-auto w-2/3">
      <div className="overlay"></div>
      <div className="text-content border-2 border-slate-800 border-dotted border-opacity-10 backdrop-blur-2xl lg:p-5 shadow-xl hero">
        <h2 className="text-gray-300">
          This is <span className={HeroCss.title}>AZIZUL</span>
        </h2>
        <h4 className="text-gray-300">React Developer || Mern Stack </h4>
        <div className="CTA mt-5 flex flex-row-reverse gap-2 justify-center items-center">
          <Button className="">Hire Me</Button>
          <a
            href="https://drive.google.com/file/d/1gEeh-sdJtZCHPf62MYSO7DmOI_XBl0KZ/view?usp=share_link"
            download="Azizul-Resume"
            className="w-fit px-6 py-2 text-white ring-1 hover:ring-0 hover:bg-indigo-500 transition-colors duration-100 ring-indigo-500 rounded font-hyper"
          >
            Download Resume
          </a>
        </div>
        <div className="icons flex items-center justify-center gap-5 mt-5">
          <a href="https://www.linkedin.com/in/az-islam/">
            <FaLinkedinIn size={30} color="royalblue" />
          </a>
          <a href="https://github.com/pro-dev-ryan">
            <FaGithub size={30} color="royalblue" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
