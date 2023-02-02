import React from "react";
import Button from "../../../../Shared/Navbar/Components/Button";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import HeroSec from "./Hero.module.css";
const Hero = () => {
  return (
    <div
      className={`text-center lg:h-full flex flex-col justify-center mb-5 pt-2 mx-2
       border-spacing-2 border-gray-200 border-opacity-70 z-20 lg:p-5 shadow ${HeroSec.hero}
       md:mx-auto rounded-lg md:w-2/3`}
    >
      <div className="overlay "></div>
      <div
        className={`text-content border-spacing-2 border-gray-200 border-opacity-70 z-20 lg:p-5 shadow ${HeroSec.hero}`}
      >
        <h2 className="text-gray-300 text-2xl">
          This is <span className="title text-5xl">AZIZUL</span>
        </h2>
        <h4 className="text-gray-300">Web Developer || Mern Stack </h4>
        <div className="CTA mt-5 flex flex-col md:flex-row-reverse gap-2 justify-center items-center">
          <Button className="">Hire Me</Button>
          <a
            href="https://drive.google.com/file/d/1gEeh-sdJtZCHPf62MYSO7DmOI_XBl0KZ/view?usp=share_link"
            download="Azizul-Resume"
            className="w-fit px-6 py-2 text-white hover:text-white ring-1 hover:ring-0 hover:bg-indigo-500 transition-colors duration-100 ring-indigo-500 rounded font-hyper"
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
