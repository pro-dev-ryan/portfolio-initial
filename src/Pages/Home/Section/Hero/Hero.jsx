import React from "react";
import Button from "../../../../Shared/Navbar/Components/Button";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg text-center h-[80vh] flex flex-col justify-center">
      <div className="overlay"></div>
      <div className="text-content">
        <h2>This is Azizul</h2>
        <h4>React Developer || Mern Stack </h4>
        <div className="CTA mt-2 flex gap-2 flex-col-reverse items-center">
          <Button className="">Hire Me</Button>
          <Button className="w-1/2">Download Resume</Button>
        </div>
        <div className="icons flex items-center justify-center gap-5 mt-5">
          <a href="https://www.linkedin.com/in/az-islam/">
            <FaLinkedinIn size={22} />
          </a>
          <a href="https://github.com/pro-dev-ryan">
            <FaGithub size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
